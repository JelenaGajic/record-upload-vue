<template>
	<div id="app">
		<Navbar />
		<div class="container mt-3">
			<router-view />
		</div>
	</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: "App",
    components: {
      Navbar
    }
};
</script>

<style>
@import "~bulma/css/bulma.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navigation {
  padding-left: 50px;
}
</style>
