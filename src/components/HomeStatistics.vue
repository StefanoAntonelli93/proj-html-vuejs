<script>
export default {
  name: "HomeStatistics",
};
</script>

<template>
  <!--we love-->
  <div class="container-fluid main-padding">
    <div class="row">
      <div class="col-6 text-center">
        <div class="row">
          <div class="background-image">
            <div
              class="green-gradient-opaque h-100 d-flex justify-content-center align-items-center text-white"
            >
              <div class="col">
                <div class="h1">280</div>
                <div>PROJECTS</div>
                <div class="row">
                  <div class="col">
                    <div class="h2 text-white">+3,500</div>
                    <div>USERS' COMMENTS</div>
                  </div>
                  <div class="col">
                    <div class="h2 text-white">100%</div>
                    <div>HAPPY CLIENTS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 p-5">
        <div class="content p-5 d-flex flex-column gap-4">
          <div class="h2 title">
            We <span class="green-text">Love</span> What We Do
            <span class="green-text"></span>
          </div>
          <Separator />
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.Separated they live in Bookmarksgrove. Far far away,
            behind the word mountains. large language ocean. far from the
            countries Vokalia and Consonantia
          </p>
          <ul>
            <li>far far away, behind the word mountains</li>
            <li>large language ocean</li>
            <li>far from the countries Vokalia and Consonantia</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "../assets/scss/partials/_variables.scss" as *;
.background-image {
  background-image: url("https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/person-with-long-curly-hair-PZ99QM2@2x.jpg");
  width: 100%;
  height: 600px;
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
.green-text {
  color: $secondary-color;
}
</style>
