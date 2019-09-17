<template>
  <div>
    <Header />
    <div class="register container">
      <form>
        <h2>Sign up</h2>
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
        <Button type="submit" v-on:click="register">Submit</Button>
        <br />
        <p>
          Already have an account? Log in
          <router-link to="/login">here</router-link>!
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import firebase from "firebase";
export default {
  name: "register",
  components: {
    Header
  },
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
          .then(() => this.$router.replace("home"));
      } else {
        alert("Passwords must match!");
      }
    }
  }
};
</script>
