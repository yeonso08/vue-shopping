<template>
  <div>
    <NavBar v-if="$route.meta.showNavbar" />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/layouts/NavBar.vue';

export default {
  components: {
    NavBar,
  }
}
</script>

<style></style>
