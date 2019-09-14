import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import firebase from "firebase";
import { routes } from "./router";
import { store } from "./store";

const config = {
  apiKey: "AIzaSyCbjIYCRlwhoCSTGJodHz4CVrMvkjWDOjU",
  authDomain: "vue-todo-d7a0d.firebaseapp.com",
  databaseURL: "https://vue-todo-d7a0d.firebaseio.com",
  projectId: "vue-todo-d7a0d",
  storageBucket: "vue-todo-d7a0d.appspot.com",
  messagingSenderId: "318267689561",
  appId: "1:318267689561:web:9b0d0c03d10f545726ff48"
};

firebase.initializeApp(config);

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes,
  mode: "history"
});

// Check if user is authenticated and if route requires authentication
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth);
  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next("home");
  else next();
});

// Wrap the vue instance in a Firebase onAuthStateChanged method
// This stops the execution of the navigation guard 'beforeEach'
// method until the Firebase initialization ends
// eslint-disable-next-line no-unused-vars
firebase.auth().onAuthStateChanged(() => {
  new Vue({
    el: "#app",
    store: store,
    router: router,
    render: h => h(App)
  });
});
const db = firebase.firestore();
export { db };
