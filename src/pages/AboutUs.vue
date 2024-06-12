<script>
import Separator from '../components/Separator.vue';
import WhiteSeparator from '../components/WhiteSeparator.vue';
import TitlePage from '../components/TitlePage.vue';
import ServiceCard from '../components/ServiceCard.vue';
import OurTeam from '../components/OurTeam.vue';

export default {
    data() {
        return {
            cardData: [
                {
                    icon: 'fa-solid fa-database',
                    name: 'Virtual Document'
                },
                {
                    icon: 'fa-solid fa-money-bill-1-wave',
                    name: 'Flexible Payments'
                },
                {
                    icon: 'fa-solid fa-gauge-high',
                    name: 'SEO Tools'
                },
                {
                    icon: 'fa-regular fa-gem',
                    name: 'UI Design'
                }
            ]
        }
    },

    components: {
        TitlePage,
        Separator,
        WhiteSeparator,
        ServiceCard,
        OurTeam,
    }
}


</script>

<template>
    <TitlePage :titlePage="'About Page'"></TitlePage>
    <section>
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
    </section>
    <section>
        <div class="our-vision">
            <div class="gradient-mask">
                <div class="content d-flex flex-column gap-5 align-items-center">
                    <span class="h2 text-white">Our Vision</span>
                    <WhiteSeparator></WhiteSeparator>
                    <div class="features row row-cols-4 g-5">
                        <div class="col" v-for="card in cardData">
                            <ServiceCard :cardName="card.name" :iconClass="card.icon"></ServiceCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <OurTeam></OurTeam>
    </section>
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

.our-vision {
    background-image: url('https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/interior-PTCVAAC@2x.jpg');
    background-size: cover;

    .gradient-mask {
        background: rgb(153, 225, 94);
        background: linear-gradient(225deg, rgba(153, 225, 94, 0.9) 0%, rgba(0, 217, 166, 0.9) 100%);
        width: 100%;
        height: 100%;
        padding: 150px 0;
        color: white;


        .features {
            width: 100%;
        }
    }
}
</style>
