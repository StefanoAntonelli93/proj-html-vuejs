<script>

    import { store } from '../store';
    import Separator from './Separator.vue';

    export default {
        name: "Home Carousel",

        components: {
            Separator,
        },

        data() {
            return {
                store,
                currentSlide: 0,
            }
        },

        methods: {

            scrollCarouselNext(countCarousel, array) {

                countCarousel++;
                if(countCarousel === array.length) {
                    countCarousel = 0;
                }
                this.currentSlide = countCarousel;
                return this.currentSlide;

            },

            scrollCarouselPrev(countCarousel, array) {

                countCarousel--;
                if(countCarousel === -1) {
                    countCarousel = array.length - 1;
                }
                this.currentSlide = countCarousel;
                return this.currentSlide;

            },

        }

    };

</script>

<template>

    <div
        class="container-fluid ps-5 pb-5 bg-color-section"
        v-for="(slide, index) in store.carouselInfo"
        v-show="currentSlide === index"
    >

        <div class="row ps-5">

            <div class="col position-relative">
                <div class="content mt-5">

                    <p class="secondary-color">17 YEARS OF EXPERIENCE</p>
                    <h1 class="mb-5">
                        {{ slide.title }}
                    </h1>
                    <Separator class="mb-5"/>
                    <p class="mb-5">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.
                    </p>
                    <div class="black-button">READ MORE</div>
                    <ul class="list-group list-group-horizontal position-absolute bottom-0 mb-3">
                        <li class="list-group-item"><a class="link-dark link-offset-2 link-underline link-underline-opacity-0 fw-semibold" href="#">Facebook</a></li>
                        <li class="list-group-item"><a class="link-dark link-offset-2 link-underline link-underline-opacity-0 fw-semibold" href="#">Instagram</a></li>
                        <li class="list-group-item"><a class="link-dark link-offset-2 link-underline link-underline-opacity-0 fw-semibold" href="#">Twitter</a></li>
                        <li class="list-group-item"><a class="link-dark link-offset-2 link-underline link-underline-opacity-0 fw-semibold" href="#">Youtube</a></li>
                    </ul>

                    <div class="scroll-buttons position-absolute bottom-0 end-0 mb-3">

                        <button class="border-0 rounded-circle me-2" @click="scrollCarouselPrev(index, store.carouselInfo)"><font-awesome-icon class="fs-4 m-2" icon="fa-solid fa-caret-left" /></button>
                        <button class="border-0 rounded-circle" @click="scrollCarouselNext(index, store.carouselInfo)"><font-awesome-icon class="fs-4 m-2" icon="fa-solid fa-caret-right" /></button>

                    </div>

                </div>
                
            </div>
            <div class="col">
                <img class="mt-5" :src="slide.imageUrl" :alt="slide.title">
            </div>

        </div>

    </div>
    
</template>

<style scoped lang="scss">

@use "../assets/scss/partials/_variables.scss" as *;

.content {
    margin-left: 10rem;

    p:first-of-type {
        margin-top: 10rem;
    }

    h1 {
        font-weight: 900;
        font-size: 5rem;
    }

    p:last-of-type {
        width: 80%;
    }

    ul {
        position: absolute;
        bottom: 50px;
    }

    button:hover {
        background-color: $secondary-color;
    }

}

img {
    width: 100%;
    border-radius: 100%;
}

</style>