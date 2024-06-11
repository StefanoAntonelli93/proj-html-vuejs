<script>
import TitlePage from "../components/TitlePage.vue";
import Separator from "../components/Separator.vue";

export default {
  components: {
    TitlePage,
    Separator,
  },
};
</script>

<template>
  <!-- title -->

  <TitlePage :titlePage="'Contacts Page'"></TitlePage>

  <!-- map -->
  <div class="map text-center border mt-5">
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
  <!-- send message -->
  <div class="p-5">
    <div class="row justify-content-around align-items-center">
      <div class="col-4">
        <div class="content py-5">
          <div class="h2">
            Please get in <span class="highlighted-text">touch</span> with
            <span class="highlighted-text">us</span>
          </div>
          <Separator class="py-5" />
          <p>
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray gleams steal into the inner
            sanctuary.When, while the lovely valley teems with vapour around me,
            and the meridian sun strikes the upper surface of the impenetrable
            foliage of my trees.
          </p>
        </div>
      </div>
      <div class="col-6">
        <div class="mb-3">
          <div class="h3 fw-bold py-3">Send message</div>
          <div class="row justify-content-center">
            <div class="col">
              <label for="Fullname" class="form-label">Fullname*</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="col">
              <label for="exampleFormControlInput1" class="form-label"
                >Please Insert Phone number</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Example textarea</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button class="button p-3 fw-bold">SEND NOW</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/_variables.scss" as *;
.shadows {
  -webkit-box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);
}
.icon,
.highlighted-text {
  color: $secondary-color;
}
</style>
