<template>
  <div class="content">
    <div class="register">
      <input type="text" name="email" v-model="email" placeholder="Email" />
      <br />
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="Password"
      />
      <br />
      <input
        type="password"
        name="confirm-password"
        v-model="confirmPassword"
        placeholder="Confirm Password"
      />
      <br />
      <button type="submit" v-on:click="register">Register</button>
      <p>
        Already have an account? Log in
        <router-link to="/login">here</router-link>!
      </p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    register() {
      if (this.password === this.confirmPassword) {
        let email = this.email;
        let password = this.password;
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => this.$router.replace("home"));
      } else {
        alert("Passwords must match!");
      }
    }
  }
};
</script>
