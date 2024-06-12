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
        <p>{{ card.name }}</p>
        <p>{{ card.role }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis possimus veritatis atque, quisquam
            accusantium nisi commodi velit quos esse quibusdam tenetur, inventore delectus a eaque qui dolor praesentium
            porro nobis.
        </p>
    </div>
</template>

<style>
.card-image {
    background-image: var(--background-image);
    background-size: cover;
}
</style>
