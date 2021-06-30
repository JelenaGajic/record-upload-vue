<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Vue</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/listings" class="nav-link">Listings</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add record</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
// import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
//   components: {
//     Navigation
//   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
