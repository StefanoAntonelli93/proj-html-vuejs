<script>
export default {
  name: "BlackSubmit",
};
</script>
<template>
  <div class="container">
    <div
      class="content text-center d-flex flex-column justify-content-center gap-5"
    >
      <div>
        <p class="text-secondary fw-semibold fs-5">Are You Ready?</p>
        <div class="h2 text-white fw-semibold mb-4">Start a New Project</div>
      </div>
      <div class="fancy-input d-flex justify-content-between">
        <input placeholder="Enter your email address" type="text" />
        <span>SUBMIT</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "../assets/scss/partials/_variables.scss" as *;

.content {
  background: linear-gradient(90deg, $primary-color 0%, black 100%);
  height: 400px;
  border-radius: 20px;
  -webkit-box-shadow: 5px 4px 35px 4px rgba(126, 126, 126, 0.5);
  box-shadow: 5px 4px 35px 4px rgba(73, 73, 73, 0.5);
  padding: 60px;
}

.form-control {
  padding: 15px 30px;
  border-radius: 30px;
  background-color: #3b3b3b;
  opacity: 0.9;
  border: none;

  &::placeholder {
    color: $secondary-text-color;
  }
}

.btn {
  border-radius: 30px;
  border: none;
  background-color: #3b3b3b;
  opacity: 0.9;
}
</style>
