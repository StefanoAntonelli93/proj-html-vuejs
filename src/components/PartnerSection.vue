<script>


export default {
    name: 'PartnerSection',
    data() {
        return {
            partners: [
                {
                    name: 'Avantagarde',
                    img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-1@2x.png'
                },
                {
                    name: 'Fastlane',
                    img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-9@2x.png'
                },
                {
                    name: 'Ron Jones',
                    img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-7@2x.png'
                },
                {
                    name: 'Chippys',
                    img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-3@2x.png'
                },
                {
                    name: 'Bullseye',
                    img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-4@2x.png'
                },
                {
                    name: 'Mighty Furnitures',
                    img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-5@2x.png'
                },
            ]
        }
    }
};

</script>

<template>
    <div class="main-container">
        <!-- QUI CI VA IL COMPONENENTE CARDS -->
        <div class="container">
            <div class="partner-images d-flex justify-content-between align-items-center">
                <div v-for="partner in partners" class="partner-image">
                    <img :src="partner.img" alt="">
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/_variables.scss' as *;

.main-container {
    background: linear-gradient(to top,
            $section-color 0%,
            $section-color 50%,
            white 50%,
            white 100%);
    padding: 200px 0 150px 0;

    .partner-images {
        width: 100%;
    }
}
</style>