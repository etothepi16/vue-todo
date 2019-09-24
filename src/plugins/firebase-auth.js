import store from "../store/index";
import Firebase from "firebase";

const config = {
  apiKey: "AIzaSyCbjIYCRlwhoCSTGJodHz4CVrMvkjWDOjU",
  authDomain: "vue-todo-d7a0d.firebaseapp.com",
  databaseURL: "https://vue-todo-d7a0d.firebaseio.com",
  projectId: "vue-todo-d7a0d",
  storageBucket: "vue-todo-d7a0d.appspot.com",
  messagingSenderId: "318267689561",
  appId: "1:318267689561:web:9b0d0c03d10f545726ff48"
};

export default {
  install: Vue => {
    const firebase = Firebase.initializeApp(config);
    const auth = firebase.auth();
    Vue.prototype.$auth = {
      login: async (email, password) => {
        return await auth.signInWithEmailAndPassword(email, password);
      },
      logout: async () => {
        await auth.signOut();
      }
    };
    auth.onAuthStateChanged(user => {
      store.commit("updateUser", user);
    });
  }
};
