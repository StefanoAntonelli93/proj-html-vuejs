<script>
// import components
import HeaderApp from './components/HeaderApp.vue';


export default {
  name: 'App',

  components: {
    HeaderApp,
  }
}
</script>

<template>
  <header>
    <HeaderApp />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <FooterApp />
  </footer>
</template>

<style scoped>
header {
  z-index: 999;
  position: fixed;
  left: 0;
  right: 0;
}

main {
  padding-top: 200px;
}
</style>
