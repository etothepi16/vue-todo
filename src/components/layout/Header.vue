<template>
  <header class="header">
    <h1>Todo List</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/login">Login</router-link> | 
      <router-link to="/register">Register</router-link> | 
      <button v-on:click="logout">Log out</button>
    </div>
  </header>
</template>
<script>
  import firebase from 'firebase'
  export default {
    name: "Header",
    methods: {
      logout(){
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      }
    }
  }
</script>
<style scoped>
  .header{
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }

  .header a{
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
</style>
