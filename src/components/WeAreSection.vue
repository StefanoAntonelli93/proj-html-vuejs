<script>
import Separator from '../components/Separator.vue';

export default {
    name: 'WeAreSection',
    data() {
        return {

        }
    },

    components: {
        Separator
    }
}
</script>

<template>
    <div class="we-are d-flex">
        <div class="text-area d-flex gap-5 flex-column">
            <div class="h2 me-1">We are a creative web
                <span class="secondary-color">design agency</span>
            </div>
            <Separator></Separator>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.Separated they live in Bookmarksgrove.
            </p>
            <div>
                <div class="button">
                    READ MORE
                </div>
            </div>

        </div>
        <div class="img-area">
            <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/woman-photographer-drinking-coffee-and-working-PJNBP6U-1024x754.jpg"
                alt="">
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

.we-are {
    margin: 130px 0;
    padding: 130px 10px;
    background: linear-gradient(to right,
            $section-color 0%,
            $section-color 72%,
            white 72%,
            white 100%);

    .text-area {
        padding: 50px 50px 0 0;
        width: 43%;

        h2 {
            font-size: 3.5rem;
        }
    }

    .img-area {
        width: 57%;

        img {
            width: 100%;
        }
    }
}
</style>