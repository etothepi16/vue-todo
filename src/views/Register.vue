<template>
  <v-layout justify-center align-center>
    <v-card>
      <v-card-title>Sign up</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="email" placeholder="Email" />
          <v-text-field
            type="password"
            v-model="password"
            placeholder="Password"
          />
          <v-text-field
            type="password"
            v-model="confirmPassword"
            placeholder="Confirm Password"
          />
          <br />
          <p>
            Already have an account? Log in
            <router-link to="/login">here</router-link>!
          </p>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn type="submit" v-on:click="register">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
// import Header from "../components/layout/Header";
import firebase from "firebase";
export default {
  name: "register",
  components: {
    // Header
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
          .then(user => {
            var ref = firebase.database().ref("users");
            var obj = {
              email: user.email,
              projects: ["Work", "Personal", "Inbox"]
            };
            ref.add(obj).then(() => this.$router.replace("home"));
          });
      } else {
        alert("Passwords must match!");
      }
    }
  }
};
</script>
