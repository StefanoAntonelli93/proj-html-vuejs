<script>
export default {
  name: "footer",
};
</script>
<template>
  <div class="footer-background-white">
    <div class="container d-flex flex-wrap justify-content-center py-5 gap-3">
      <div class="col">
        <div class="content">
          <img
            draggable="false"
            src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/cropped-Group-39@2x.png"
            alt=""
          />
          <div class="text-logo py-3">
            While the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees.While the lovely valley teems with vapour around me.
          </div>
        </div>
      </div>
      <div class="col">
        <div class="content">
          <div class="title">QUICK LINKS</div>
          <hr />
          <ul class="list-unstyled">
            <li><a class="text-decoration-none" href="">Careers</a></li>
            <li><a class="text-decoration-none" href=""> News</a></li>
            <li><a class="text-decoration-none" href="">Terms of use</a></li>
            <li>
              <a class="text-decoration-none" href="">Privacy Projects</a>
            </li>
            <li><a class="text-decoration-none" href="">About</a></li>
            <li><a class="text-decoration-none" href="">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="content">
          <div class="title">titolo</div>
          <hr />
          <ul>
            <li><a href="">link</a></li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="content">
          <div class="title">titolo</div>
          <hr />
          <ul>
            <li><a href="">link</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-background-dark">
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
.footer-background-dark {
  background: linear-gradient(90deg, $primary-color 40%, rgba(0, 0, 0, 1) 100%);
  color: $secondary-text-color;
}
li a {
  color: black;
}
.social-links {
  cursor: pointer;
}
</style>
