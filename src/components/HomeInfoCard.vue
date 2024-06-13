<script>
export default {
  name: "HomeInfoCard",
};
</script>
<template>
  <!--we are-->
  <!--DA RIEMPIRE DINAMICAMENTE-->
  <div class="container-fluid">
    <div class="row">
      <div class="col-4">
        <div class="h2">
          We Are Here To Make Your <span>Website</span> Look More
          <span>Elegant</span> And Stylish!
        </div>
        <div class="button">VIEW ALL</div>
      </div>
      <div class="col-8">
        <div class="container">
          <div class="content">
            <div class="row row-cols-2">
              <div class="col">
                <div class="card p-5">
                  <div>
                    <font-awesome-icon
                      class="fa-4x mb-4 icon"
                      icon="fa-solid fa-gauge-high"
                    />
                  </div>
                  <div class="h3">title</div>
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
}
</style>
