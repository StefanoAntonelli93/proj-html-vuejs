<script>
export default {
  name: "BlackSubmit",
};
</script>
<template>
  <div class="container-fluid d-flex justify-content-between">
    <div class="row">
      <div class="col">
        <div class="content p-5 bg-dark text-center p-3">
          <p class="text-secondary">Are You Ready?</p>
          <div class="h3 text-white fw-semibold">Start a New Project</div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary fw-semibold"
              type="button"
              id="button-addon2"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
