<script>
export default {
  name: "contactsCard",
};
</script>
<template>
  <!-- info card -->
  <div class="info-card">
    <div class="container d-flex justify-content-between gap-4">
      <div class="col d-flex gap-2 p-5 shadows">
        <div class="align-self-center">
          <font-awesome-icon
            class="icon fa-5x"
            icon="fa-solid fa-location-dot"
          />
        </div>
        <div class="content p-4">
          <div class="fw-semibold py-3 fs-3">ADDRESS:</div>
          <div>123 Ave, Lorem City, site Country, The World</div>
        </div>
      </div>
      <div class="col d-flex gap-2 p-5 shadows">
        <div class="align-self-center">
          <font-awesome-icon
            class="icon fa-5x"
            icon="fa-solid fa-phone-volume"
          />
        </div>
        <div class="content p-4">
          <div class="fw-semibold py-3 fs-3">PHONE:</div>
          <div>(001) 123456789 - 234567891 info@phloxbusiness.com</div>
        </div>
      </div>
      <div class="col d-flex gap-2 p-5 shadows">
        <div class="align-self-center">
          <font-awesome-icon class="icon fa-5x" icon="fa-solid fa-stopwatch" />
        </div>
        <div class="content p-3">
          <div class="fw-semibold py-3 fs-3">WORK HOURS:</div>
          <div>
            <p>Monday-Friday 09.00-23.00</p>
            <p>Sunday 09.00-16.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "../assets/scss/partials/_variables.scss" as *;
.info-card {
  position: absolute;
  top: 450px;
  left: 20px;
  width: calc(100% - 40px);
  z-index: 10;
  .shadows {
    background-color: white;
    -webkit-box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);
  }
  .icon,
  .highlighted-text {
    color: $secondary-color;
  }
}
</style>
