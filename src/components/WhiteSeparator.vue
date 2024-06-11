<script>
export default {
    name: 'WhiteSeparator',
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
    background-color: white;
    border-radius: 5px;
    margin-right: 12px;
}

.second-segment {
    width: 45px;
    height: 5px;
    background-color: white;
    border-radius: 5px;
}
</style>