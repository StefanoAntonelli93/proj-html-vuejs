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
            <div class="h3">{{ card.name }}</div>
            <p>{{ card.role }}</p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Conson, there live the blind
                texts. Separated they live in Bookmarksgrove right at the coast of the Semantics...
            </p>
            <hr>
            <div class="social-links d-flex align-items-center gap-4">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                <font-awesome-icon icon="fa-brands fa-twitter" />
                <font-awesome-icon icon="fa-brands fa-pinterest-p" />
            </div>
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

    &:hover .card-content {
        display: block;
        background: rgb(153, 225, 94);
        background: linear-gradient(225deg, rgba(153, 225, 94, 0.95) 0%, rgba(0, 217, 166, 0.95) 100%);
    }

    .card-content {
        display: none;
        padding: 70px 50px;
        border-radius: 10px;
        color: white;
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;


    }
}
</style>
