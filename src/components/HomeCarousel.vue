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
        class="container-fluid"
        v-for="(slide, index) in store.carouselInfo"
        v-show="currentSlide === index"
    >

        <div class="row">

            <div class="col-8">
                <p>17 Years of experience</p>
                <h1>
                    {{ slide.title }}
                </h1>
                <Separator />
                <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.
                </p>
                <div class="button">READ MORE</div>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Youtube</a></li>
                </ul>
                <button @click="scrollCarouselPrev(index, store.carouselInfo)">icona prev</button>
                <button @click="scrollCarouselNext(index, store.carouselInfo)">icona next</button>
            </div>
            <div class="col-4">
                <img :src="slide.imageUrl" :alt="slide.title">
            </div>

        </div>

    </div>
    
</template>