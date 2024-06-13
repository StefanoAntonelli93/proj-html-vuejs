<script>
import Separator from './Separator.vue';
import HomeSupportCard from './HomeSupportCard.vue'

export default {
    name: "HomeSupport",
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
                    <div class="col text-center">
                        <div class="content">
                            <HomeSupportCard></HomeSupportCard>
                        </div>
                    </div>
                    <div class="col text-center">
                        <h5>
                            DEVELOPMENT
                        </h5>
                        <p>
                            WordPress Projects
                        </p>
                        <h2>$ 15 / Design</h2>
                        <ul>
                            <li>Creative Design Enabled</li>
                            <li>Vibrant Color Usage</li>
                            <li>Eye Catching Design</li>
                            <li>Extreme Typography</li>
                            <li>Exceptional Design</li>
                        </ul>
                    </div>
                    <div class="col text-center">
                        <h5>
                            SEO
                        </h5>
                        <p>
                            Web Products
                        </p>
                        <h2>$ 10 / Design</h2>
                        <ul>
                            <li>Creative Design Enabled</li>
                            <li>Vibrant Color Usage</li>
                            <li>Eye Catching Design</li>
                            <li>Extreme Typography</li>
                            <li>Exceptional Design</li>
                        </ul>
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
