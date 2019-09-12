import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

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

Vue.config.productionTip = false;

let app = "";

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
