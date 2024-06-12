<script>
import TitlePage from "../components/TitlePage.vue";
import Separator from "../components/Separator.vue";
import ContactsCard from "../components/ContactsCard.vue";
import ContactsMap from "../components/ContactsMap.vue";
import ContactsMessage from "../components/ContactsMessage.vue";

export default {
  components: {
    TitlePage,
    Separator,
    ContactsCard,
    ContactsMap,
    ContactsMessage,
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
  <ContactsMessage />
</template>

<style scoped>
.map-container {
  position: relative;
}
</style>
