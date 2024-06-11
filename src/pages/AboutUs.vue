<script>
import TitlePage from '../components/TitlePage.vue';

export default {
    components: {
        TitlePage
    }
}


</script>

<template>
    <TitlePage :titlePage="'About Page'"></TitlePage>
    <section>
        <div class="we-are">
            <div class="text-area">
                <h2>JSHFLIwuhjlifjHBWLKEJFClwe</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis mollitia, eius tenetur repellat dolore
                    distinctio illum. Enim natus cum hic ducimus! Modi facere deleniti assumenda dolore non sequi aperiam?
                </p>
            </div>
            <div class="img-area">

            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;

.we-are {
    margin: 130px 0;
    padding: 130px 0;
    height: 500px;
    background: linear-gradient(to right,
            $section-color 0%,
            $section-color 72%,
            white 72%,
            white 100%);

    .text-area {
        width: 45%;
    }

    .img-area {
        width: 55%;
    }
}
</style>
