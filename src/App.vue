<script>
// import components
import HeaderApp from "./components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";

export default {
  name: "App",

  components: {
    HeaderApp,
    FooterApp,
  },
};
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
main {
  padding-top: 147.7px;
}
</style>
