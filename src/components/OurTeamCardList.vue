<script>
import OurTeamCard from './OurTeamCard.vue';

export default {
    name: 'OutTeamCardList',
    data() {
        return {
            cardInfo: [
                {
                    name: 'ANNA PHILANDROS',
                    role: 'Creative Director',
                    img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-142@2x-443x424.png'
                },
                {
                    name: 'DEXTER MATTHEW',
                    role: 'Designer',
                    img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-143@2x-443x424.png'
                },
                {
                    name: ' RANDY SMITH',
                    role: 'Creative Director',
                    img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-144@2x-443x424.png'
                },
                {
                    name: ' ANGELO GARNER',
                    role: 'Co-founder',
                    img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-146@2x-443x424.png'
                },
                {
                    name: ' JIMMIE BENEDICT',
                    role: 'Frontend Developer',
                    img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-150@2x-443x424.png'
                },
                {
                    name: ' JANET GARNER',
                    role: 'Founder',
                    img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-145@2x-443x424.png'
                },
            ]
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
            <div class="col" v-for="card in cardInfo">
                <OurTeamCard :card="card"></OurTeamCard>
            </div>
        </div>
    </div>
</template>

<style></style>