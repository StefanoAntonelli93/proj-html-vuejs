<script>

export default {
    name: 'OurTeamCard',

    props: ['card'],

    computed: {
        setBgImg() {
            return {
                '--background-image': `url(${this.card.img})`
            }
        }
    }


}

</script>

<template>
    <div class="card-image" :style="setBgImg">
        <div class="card-content">
            <p>{{ card.name }}</p>
            <p>{{ card.role }}</p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Conson, there live the blind
                texts. Separated they live in Bookmarksgrove right at the coast of the Semantics...
            </p>
        </div>

    </div>
</template>

<style scoped lang="scss">
.card-image {
    width: 100%;
    padding-top: 100%;
    position: relative;
    background-image: var(--background-image);
    background-size: cover;
    background-position: center;

    .card-content {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
}
</style>
