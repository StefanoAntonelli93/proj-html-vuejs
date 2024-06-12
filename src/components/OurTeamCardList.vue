<script>
import OurTeamCard from './OurTeamCard.vue';

import { store } from '../store.js'

export default {
    name: 'OurTeamCardList',
    data() {
        return {
            store
        }
    },
    components: {
        OurTeamCard
    }
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-3 g-3 ">
            <div class="col" v-for="card in store.cardInfo">
                <OurTeamCard :card="card"></OurTeamCard>
            </div>
        </div>
    </div>
</template>

<style></style>