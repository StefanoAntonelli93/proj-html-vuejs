<script>
export default {
    name: 'Separator',
};

</script>

<template>
    <div class="separator d-flex">
        <div class="first-segment">
        </div>
        <div class="second-segment">
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/_variables.scss' as *;

.first-segment {
    width: 8px;
    height: 5px;
    background: linear-gradient(90deg, rgba(153, 225, 94, 1) 0%, $secondary-color 100%);
    border-radius: 5px;
    margin-right: 12px;
}

.second-segment {
    width: 45px;
    height: 5px;
    background: linear-gradient(90deg, rgba(153, 225, 94, 1) 0%, $secondary-color 100%);
    border-radius: 5px;
}
</style>