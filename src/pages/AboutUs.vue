<script>
import Separator from '../components/Separator.vue';
import TitlePage from '../components/TitlePage.vue';
import OurTeam from '../components/OurTeam.vue';
import ContactUsSection from '../components/ContactUsSection.vue';
import OurVisionSection from '../components/OurVisionSection.vue';
import WeAreSection from '../components/WeAreSection.vue';
import PartnerSection from '../components/PartnerSection.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        TitlePage,
        Separator,
        OurTeam,
        ContactUsSection,
        OurVisionSection,
        WeAreSection,
        PartnerSection
    }
}


</script>

<template>
    <TitlePage :titlePage="'About Page'"></TitlePage>
    <section>
        <WeAreSection></WeAreSection>
    </section>
    <section>
        <OurVisionSection></OurVisionSection>
    </section>
    <section>
        <OurTeam></OurTeam>
    </section>
    <section>
        <ContactUsSection></ContactUsSection>
    </section>
    <section>
        <PartnerSection></PartnerSection>
    </section>
</template>
