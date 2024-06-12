<script>
import TitlePage from "../components/TitlePage.vue";
import Separator from "../components/Separator.vue";
import ContactsCard from "../components/ContactsCard.vue";
import ContactsMap from "../components/ContactsMap.vue";

export default {
  components: {
    TitlePage,
    Separator,
    ContactsCard,
    ContactsMap,
  },
};
</script>

<template>
  <!-- title -->
  <TitlePage :titlePage="'Contacts Page'"></TitlePage>

  <!-- map -->
  <div class="map-container mt-5">
    <ContactsMap myWidth="100%" myHeight="600px" />
    <!-- info card -->
    <ContactsCard />
  </div>

  <!-- send message -->
  <div class="container message-container">
    <div class="row justify-content-between align-items-center gap-2">
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
      <!-- send message form -->
      <div class="col-6">
        <div class="mb-3">
          <div class="h3 fw-bold py-3">Send message</div>
          <div class="row justify-content-center">
            <div class="col d-flex flex-column">
              <label for="Fullname" class="form-label">Fullname*</label>
              <input
                type="text"
                class="bottom-border"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="col d-flex flex-column">
              <label for="exampleFormControlInput1" class="form-label"
                >Email*</label
              >
              <input
                type="email"
                class="bottom-border"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="col d-flex flex-column">
              <label for="exampleFormControlInput1" class="form-label"
                >Please Insert Phone number</label
              >
              <input
                type="text"
                class="bottom-border"
                id="exampleFormControlInput1"
              />
            </div>
          </div>
        </div>
        <div class="mb-5 d-flex flex-column">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Message</label
          >
          <textarea
            class="bottom-border"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="d-flex justify-content-end">
          <div class="button shadow-button-green py-3 fw-bold">SEND NOW</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/_variables.scss" as *;

.map-container {
  position: relative;

  .map {
    position: relative;
  }
}

.message-container {
  margin-top: 200px;
  .bottom-border {
    border: none;
    border-bottom: 2px solid #000;
    outline: none;
    box-shadow: none;
  }
}
</style>
