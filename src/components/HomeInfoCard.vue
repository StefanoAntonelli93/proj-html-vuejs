<script>
import Separator from "../components/Separator.vue";
export default {
  name: "HomeInfoCard",
  components: {
    Separator,
  },
};
</script>
<template>
  <!--we are-->
  <!--DA RIEMPIRE DINAMICAMENTE-->
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-4">
        <div class="h2">
          We Are Here To Make Your <span class="green-text">Website</span> Look
          More <span class="green-text">Elegant</span> And Stylish!
        </div>
        <Separator class="py-5" />
        <div class="button">VIEW ALL</div>
      </div>
      <div class="col-8">
        <div class="container">
          <div class="content">
            <div class="row row-cols-2">
              <div class="col mb-5">
                <div class="card p-5">
                  <div>
                    <font-awesome-icon
                      class="fa-4x mb-4 icon"
                      icon="fa-solid fa-gauge-high"
                    />
                  </div>
                  <div class="h3">Speed Optimization</div>
                  <p class="card-text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia Separated...
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="card p-5">
                  <div>
                    <font-awesome-icon
                      class="fa-4x mb-4 icon"
                      icon="fa-brands fa-cloudversify"
                    />
                  </div>
                  <div class="h3">Cloud Solutions</div>
                  <p class="card-text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia Separated...
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="card p-5">
                  <div>
                    <font-awesome-icon
                      class="fa-4x mb-4 icon"
                      icon="fa-solid fa-tablet-screen-button"
                    />
                  </div>
                  <div class="h3">Website Design</div>
                  <p class="card-text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia Separated...
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="card p-5">
                  <div>
                    <font-awesome-icon
                      class="fa-4x mb-4 icon"
                      icon="fa-solid fa-stopwatch-20"
                    />
                  </div>
                  <div class="h3">Online Marketing</div>
                  <p class="card-text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia Separated...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "../assets/scss/partials/_variables.scss" as *;
.card {
  border-radius: 10px;
  -webkit-box-shadow: 5px 4px 35px 4px rgba(126, 126, 126, 0.5);
  box-shadow: 5px 4px 35px 4px rgba(73, 73, 73, 0.5);
  &:hover {
    display: block;
    color: white;
    background: rgb(153, 225, 94);
    background: linear-gradient(
      225deg,
      rgba(153, 225, 94, 0.95) 0%,
      rgba(0, 217, 166, 0.95) 100%
    );
    .icon {
      color: white;
    }
  }
  .icon {
    color: $secondary-color;
  }
}
.green-text {
  color: $secondary-color;
}
</style>
