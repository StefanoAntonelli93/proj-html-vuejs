<script>
export default {
  name: "BlackSubmit",
};
</script>
<template>
  <div class="container">
    <div class="content bg-dark text-center d-flex flex-column justify-content-center gap-5">
      <div>
        <p class="text-secondary fw-semibold fs-5">Are You Ready?</p>
        <div class="h2 text-white fw-semibold mb-4">Start a New Project</div>
      </div>
      <div class="fancy-input d-flex justify-content-between">
        <input placeholder="Enter your email address" type="text">
        <span>SUBMIT</span>
      </div>

      <!-- <div class="input-group px-5">
          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username"
            aria-describedby="button-addon2" />
          <button class="btn btn-outline-secondary fw-bold" type="button" id="button-addon2">
            SUBMIT
          </button>
        </div> -->
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "../assets/scss/partials/_variables.scss" as *;

.content {
  height: 400px;
  border-radius: 20px;
  -webkit-box-shadow: 5px 4px 35px 4px rgba(126, 126, 126, 0.5);
  box-shadow: 5px 4px 35px 4px rgba(73, 73, 73, 0.5);
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
