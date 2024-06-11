<script>
import Separator from "./Separator.vue";
import MapElement from "./MapElement.vue";
export default {
  name: "footer",
  components: {
    Separator,
    MapElement,
  },
};
</script>
<template>
  <div class="footer-background-white py-5">
    <div class="container d-flex flex-wrap justify-content-center py-5 gap-4">
      <div class="col">
        <div class="content pe-4">
          <img draggable="false"
            src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/cropped-Group-39@2x.png" alt="" />
          <div class="text-logo py-3">
            While the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees.While the lovely valley teems with vapour around me.
          </div>
        </div>
      </div>
      <div class="col">
        <div class="content d-flex flex-column gap-4">
          <div class="title fs-5 fw-semibold">QUICK LINKS</div>
          <Separator />
          <ul class="list-unstyled overlay">
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
        <div class="content d-flex flex-column gap-4">
          <div class="title fs-5 fw-semibold">CONTACTS</div>
          <Separator />
          <div class="contacts-content pe-3">
            <P>Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX
              76051
            </P>
            <p>info@yourdomain.com</p>
            <p>+99 (0) 101 0000 888</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="content d-flex flex-column gap-4">
          <div class="title fs-5 fw-semibold">LOCATION ON MAP</div>
          <Separator />
          <MapElement :myWidth="100" :myHeight="50" />
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

  &:hover {
    color: $secondary-color;
  }
}

.social-links {
  cursor: pointer;
}

.footer-map {
  width: 100%;
}
</style>
