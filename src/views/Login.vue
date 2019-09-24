<template>
  <v-layout justify-center align-center>
    <v-card>
      <v-card-title>Sign in</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="email" placeholder="Email" />
          <v-text-field
            type="password"
            v-model="password"
            placeholder="password"
          />
          <br />
          <p>
            Don't have an account yet? You can create one
            <router-link to="/register">here</router-link>!
          </p>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn type="submit" v-on:click="login">Log in</v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
// import Header from "../components/layout/Header";
import { store } from "../store";
import firebase from "firebase";
export default {
  name: "login",
  components: {
    // Header
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      let email = this.email,
        password = this.password;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          // console.log(JSON.stringify(user.user));
          let u = user.user;
          store.dispatch("setUser", u);
          store.dispatch("setProjects");
          store.dispatch("setTodos");
          this.$router.replace("home");
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          store.dispatch("setUser", null);
          this.$router.replace("login");
        });
    }
  }
};
</script>
