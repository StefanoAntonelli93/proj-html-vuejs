<script>
import Separator from "../components/Separator.vue";
export default {
  name: "HomeOurMission",
  components: {
    Separator,
  },
};
</script>
<template>
  <!--learn more-->
  <div class="container-fluid main-padding">
    <div class="row">
      <div class="col-6 p-5">
        <div class="background-image">
          <div class="green-gradient-opaque h-100"></div>
          <div class="img2">
            <img
              src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/businesswoman-analysing-document-P8WSNMC-1024x820.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="col-6 p-5">
        <div class="content p-5 d-flex flex-column gap-4">
          <div class="h2 title">
            learn more about our <span class="green-text">missions</span>
          </div>
          <Separator />
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.Separated they live in Bookmarksgrove.
          </p>
          <div>
            <div class="button">READ MORE</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "../assets/scss/partials/_variables.scss" as *;

.green-text {
  color: $secondary-color;
}
.title {
  margin-right: 150px;
}

.background-image {
  background-image: url("https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/busy-architect-PYVKWM4-1024x872.jpg");
  width: 100%;
  height: 600px;
  left: -80px;
  bottom: 40px;
  border-radius: 20px;
  position: relative;
}

.green-gradient-opaque {
  border-radius: 20px;
  background: rgb(153, 225, 94);
  background: linear-gradient(
    225deg,
    rgba(153, 225, 94, 0.8) 0%,
    rgba(0, 217, 166, 0.8) 100%
  );
}

.img2 {
  position: absolute;
  top: 80px;
  left: 60px;
  right: -100px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
}
.container-fluid {
  background-color: #fafafa;
}
// position image
</style>
