<template>
  <v-content>
    <v-container fluid>
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
                autocomplete="new-password"
              />
              <v-text-field
                type="password"
                v-model="confirmPassword"
                placeholder="Confirm Password"
                autocomplete="new-password"
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
    </v-container>
  </v-content>
</template>

<script>
// import Header from "../components/layout/Header";
import { store } from "../store";
import { db } from "../main";
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
            let userCollection = db.collection("users");
            let u = {
              email
            };
            userCollection.add(u);
            store.dispatch("setUser", user.user);
            this.$router.replace("/home");
          });
      } else {
        alert("Passwords must match!");
      }
    }
  }
};
</script>
<style scoped>
.v-content {
  padding: 64px 0px 0px 0px !important;
}
</style>
