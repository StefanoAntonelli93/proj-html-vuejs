<script>
import ServiceCard from '../components/ServiceCard.vue';
import WhiteSeparator from '../components/WhiteSeparator.vue';

export default {
    name: 'OurVisionSection',
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
        ServiceCard,
        WhiteSeparator
    }
}
</script>

<template>
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
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

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