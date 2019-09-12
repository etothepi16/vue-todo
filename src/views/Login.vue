<template>
  <div class="login">
    <h2>Sign in</h2>
    <input type="text" name="email" v-model="email" placeholder="Email" />
    <br />
    <input type="password" name="password" v-model="password" placeholder="password" />
    <br />
    <button type="submit" v-on:click="login">Log in</button>
    <p>
      Don't have an account yet? You can create one
      <router-link to="/register">here</router-link>!
    </p>
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
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
            this.$router.replace('home')
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
</style>