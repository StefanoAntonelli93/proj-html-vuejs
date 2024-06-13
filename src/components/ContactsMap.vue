<script>
export default {
  name: "contactsMap",
  props: ["myWidth", "myHeight"],
  data() {
    return {
      showMap: false,
    };
  },
  mounted() {
    this.showMap = true;
  },
};
</script>
<template>
  <transition name="slide-fade">
    <div v-if="showMap" class="map text-center">
      <!-- google maps link -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172332.7219707041!2d-74.07022514757855!3d40.7520689889307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2585500e85589%3A0x18f39d1f8ee2a312!2sNew%20York%20Marriott%20Marquis!5e0!3m2!1sit!2sit!4v1718118337398!5m2!1sit!2sit"
        :width="myWidth"
        :height="myHeight"
        style="border: 0"
        allowfullscreen="true"
        referrerpolicy="no-referrer-when-downgrade"
        zoom="5"
      ></iframe>
    </div>
  </transition>
</template>
<style scoped lang="scss">
// ANIMATION
// SLIDE-FADE
@keyframes slide-in {
  // transizione dall'alto verso il basso in 1.5 secondi
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-fade-enter-active {
  animation: slide-in 1.5s ease-out forwards;
}

.slide-fade-enter {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
