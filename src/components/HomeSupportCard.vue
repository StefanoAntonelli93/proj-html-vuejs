<script>

export default {
    name: "HomeSupportCard",

    props: ['card']
};
</script>
<template>
    <div class="h3">
        {{ card.title }}
    </div>
    <p>
        {{ card.desc }}
    </p>
    <h2>{{ card.value }}</h2>
    <div v-for="feat in card.feats">
        {{ feat }}
    </div>
</template>
<style scoped lang="scss"></style>
