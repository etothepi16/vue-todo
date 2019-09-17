<template>
  <div>
    <Header />
    <div class="login container">
      <form>
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
        <br />
        <p>
          Don't have an account yet? You can create one
          <router-link to="/register">here</router-link>!
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import firebase from "firebase";
export default {
  name: "login",
  components: {
    Header
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
        .then(() => this.$router.replace("home"));
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
