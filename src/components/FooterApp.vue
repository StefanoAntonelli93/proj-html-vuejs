<script>
export default {
  name: "footer",
};
</script>
<template>
  <div class="footer-background">
    <div class="container d-flex flex-wrap justify-content-between py-5">
      <p>© 2024 PHLOX BUSINESS THEME.</p>
      <div class="social-links d-flex align-items-center gap-4">
        <font-awesome-icon icon="fa-brands fa-facebook-f" />
        <font-awesome-icon icon="fa-brands fa-twitter" />
        <font-awesome-icon icon="fa-brands fa-pinterest-p" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/_variables.scss" as *;
.footer-background {
  background: linear-gradient(90deg, $primary-color 40%, rgba(0, 0, 0, 1) 100%);
  color: $secondary-text-color;
}
</style>
