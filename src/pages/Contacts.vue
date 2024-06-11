<template>
  <!-- title -->
  <div class="container text-center p-5">
    <h1>Contact Page</h1>
  </div>
  <!-- map -->
  <div class="map text-center border">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172332.7219707041!2d-74.07022514757855!3d40.7520689889307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2585500e85589%3A0x18f39d1f8ee2a312!2sNew%20York%20Marriott%20Marquis!5e0!3m2!1sit!2sit!4v1718118337398!5m2!1sit!2sit"
      width="100%"
      height="600"
      style="border: 0"
      allowfullscreen="true"
      referrerpolicy="no-referrer-when-downgrade"
      zoom="5"
    ></iframe>
  </div>
  <!-- info card -->
  <div class="info-card">
    <div class="container d-flex justify-content-between gap-5">
      <div class="col d-flex gap-2 p-4 sfuma">
        <div class="align-self-center">icon</div>
        <div class="content p-5">
          <div class="fw-semibold py-3 fs-3">ADDRESS:</div>
          <div>123 Ave, Lorem City, site Country, The World</div>
        </div>
      </div>
      <div class="col d-flex gap-2 p-4 sfuma">
        <div class="align-self-center">icon</div>
        <div class="content p-5">
          <div class="fw-semibold py-3 fs-3">PHONE:</div>
          <div>(001) 123456789 - 234567891 info@phloxbusiness.com</div>
        </div>
      </div>
      <div class="col d-flex gap-2 p-4 sfuma">
        <div class="align-self-center">icon</div>
        <div class="content p-5">
          <div class="fw-semibold py-3 fs-3">WORK HOURS:</div>
          <div>
            Monday - Friday <span class="px-2">09.00 - 23.00</span> Sunday
            <span class="px-2">09.00 - 16.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- send message -->
  <div class="send-message">
    <div class="container">
      <div class="row justify-content-between border">
        <div class="col-4">with-us</div>
        <div class="col-6">send message</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sfuma {
  -webkit-box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);
}
</style>
