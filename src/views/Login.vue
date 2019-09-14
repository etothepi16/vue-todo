<template>
  <div class="content">
    <div class="login">
      <h2>Sign in</h2>
      <input type="text" name="email" v-model="email" placeholder="Email" />
      <br />
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="password"
      />
      <br />
      <button type="submit" v-on:click="login">Log in</button>
      <p>
        Don't have an account yet? You can create one
        <router-link to="/register">here</router-link>!
      </p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
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
        .then(user => this.$router.replace("home"));
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("login"));
    }
  }
};
</script>
