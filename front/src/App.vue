<template>
  <div class="min-h-full">
    <navbar-vue />
    <router-view />
  </div>
</template>

<script>
import NavbarVue from './components/base/navbar/Navbar.vue'
export default {
  name: 'App',
  components: {
    NavbarVue
  }
}
</script>

<style>
</style>
