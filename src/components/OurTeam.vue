<script>
import Separator from './Separator.vue';
import WhiteSeparator from './WhiteSeparator.vue';
import OurTeamCardList from './OurTeamCardList.vue'

export default {
    name: 'OutTeam',
    components: {
        Separator,
        OurTeamCardList,
    }
}
</script>

<template>
    <div class="main-container">
        <div class="container d-flex flex-column gap-5 align-items-center">
            <div class="h2 text-center">
                Get to know
            </div>
            <div class="h2 secondary-color text-center">
                our team
            </div>
            <Separator></Separator>
            <OurTeamCardList></OurTeamCardList>
        </div>
    </div>
</template>

<style scoped>
.main-container {
    background-color: white;
    padding: 200px 0;
}
</style>