<script>
import { store } from "../store";
export default {
  name: "contactsCard",
  data() {
    return {
      store,
      showCard: false,
    };
  },
  mounted() {
    this.showCard = true;
  },
};
</script>
<template>
  <!-- info card -->
  <transition name="slide-fade">
    <div class="info-card" v-if="showCard">
      <div class="container d-flex justify-content-between gap-4">
        <div
          v-for="card in store.contactCard"
          class="col d-flex gap-2 p-5 shadows bg-white"
        >
          <div class="align-self-center">
            <font-awesome-icon class="icon fa-5x" :icon="card.icon" />
          </div>
          <div class="content p-4">
            <div class="fw-semibold py-3 fs-3">{{ card.title }}</div>
            <div>{{ card.info }}</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped lang="scss">
@use "../assets/scss/partials/_variables.scss" as *;

.info-card {
  position: absolute;
  top: 500px;
  left: 20px;
  width: calc(100% - 40px);
  z-index: 10;

  .icon,
  .highlighted-text {
    color: $secondary-color;
  }
}

// ANIMATION
// SLIDE-FADE
// transizione dal basso verso l'alto in 1.5 secondi
@keyframes slide-in {
  from {
    transform: translateY(100%);
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
  transform: translateY(100%);
  opacity: 0;
}
</style>
