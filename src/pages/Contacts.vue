<script>
import TitlePage from "../components/TitlePage.vue";
import Separator from "../components/Separator.vue";
import ContactsCard from "../components/ContactsCard.vue";
import ContactsMap from "../components/ContactsMap.vue";
import ContactsMessage from "../components/ContactsMessage.vue";
import PartnerSection from "../components/PartnerSection.vue";

export default {
  components: {
    TitlePage,
    Separator,
    ContactsCard,
    ContactsMap,
    ContactsMessage,
    PartnerSection,
  },
};
</script>

<template>
  <!-- title -->
  <TitlePage :titlePage="'Contacts Page'"></TitlePage>
  <!-- positione relative(map) + absolute(info-card) -->
  <div class="map-container mt-5">
    <!-- map -->
    <ContactsMap myWidth="100%" myHeight="600px" />
    <!-- info card -->
    <ContactsCard />
  </div>

  <!-- send message -->
  <ContactsMessage />
  <!-- submit + partner -->
  <PartnerSection />
</template>

<style scoped>
.map-container {
  position: relative;
}
</style>
