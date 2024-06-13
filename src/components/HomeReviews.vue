<script>
export default {
    name: 'HomeReviews',
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="background">
        <div class="overlay">
            <div class="content  d-flex flex-column gap-5 align-items-center">
                <div class="virg h1 secondary-color">“</div>
                <div class="bbq mb-5 text-white text-center">When it comes to barbequing, there are two main schools of
                    thought for the techniques that you can use. Freshly scrambled eggs with applewood smoked bacon - are
                    amazing!
                </div>
                <div class="client-section d-flex flex-column align-items-center">
                    <div class="">
                        <img class="cirlce"
                            src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/businesswoman-analysing-document-P8WSNMC-150x150.jpg">
                    </div>
                    <div class="client-info d-flex flex-column align-items-center gap-2">
                        <div class="h3 secondary-color">LISSA DURBIN</div>
                        <div class="text-center text-white">Client</div>
                    </div>

                </div>

            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.virg {
    font-size: 10rem;
    line-height: 50px;
}

.bbq {
    padding: 0 200px;
    font-size: 1.3rem;
}

.cirlce {
    border-radius: 50%;
    overflow: hidden;

}

.background {
    background-image: url('https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg');
    width: 100%;
    background-size: cover;

    .overlay {
        background-color: rgba($color: #393939, $alpha: 0.8);
        width: 100%;
        height: 100%;
        padding: 200px;
    }
}
</style>