<script>
import { store } from '../store';

import Separator from './Separator.vue';
import HomeSupportCard from './HomeSupportCard.vue'

export default {
    name: "HomeSupport",

    data() {
        return {
            store
        }
    },

    components: {
        Separator,
        HomeSupportCard
    }
};
</script>
<template>
    <div class="container-fluid main-padding bg-color-section">

        <div class="row">
            <div class="col-4">
                <div class="content d-flex flex-column gap-4 pe-5">
                    <div class="h2">
                        With <span class="secondary-color">Live Chat
                            24/7</span> Support
                    </div>
                    <Separator></Separator>
                    <p>
                        Far far away, behind the word mountains, far from the countriesVokalia and Consonantia, there live
                        the
                        blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.
                    </p>
                </div>

            </div>
            <div class="col-8">
                <div class="row">
                    <div v-for="card in store.supportCard" class="col">
                        <div class="content">
                            <HomeSupportCard :card="card"></HomeSupportCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style scoped lang="scss">
.main-padding {
    padding: 200px 25px;
}
</style>
