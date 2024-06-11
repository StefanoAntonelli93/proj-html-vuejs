<script>


export default {
    name: 'TitlePage',

    props: ['titlePage'],
};

</script>

<template>
    <div class="background d-flex justify-content-center align-items-center fw-bold fs-1">
        <span>{{ titlePage }}</span>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/_variables.scss' as *;

.background {
    padding: 50px;
    background-color: $section-color;
    color: $secondary-color;
}
</style>