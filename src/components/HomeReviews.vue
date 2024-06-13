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
                <div class="h1 mb-5 text-white text-center">PLEASE SEND US YOUR <span
                        class="secondary-color">QUESTIONS</span> AND
                    WE CAN <span class="secondary-color">HELP</span> YOU BETTER
                </div>
                <div class="button">CONTACT US</div>
            </div>

        </div>

    </div>
</template>

<style scoped lang="scss">
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