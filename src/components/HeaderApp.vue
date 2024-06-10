<script>

export default {
    name: 'HeaderApp',

}
</script>

<template>
    <div class="header-contacts">
        <div class="container d-flex justify-content-between">
            <div class="contact-numbers">
                <span>(001) 88451234</span>
                <span>88455438</span>
            </div>
            <div class="social-links d-flex align-items-center gap-4">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                <font-awesome-icon icon="fa-brands fa-twitter" />
                <font-awesome-icon icon="fa-brands fa-pinterest-p" />
            </div>
        </div>
    </div>
    <div class="header-content">
        <div class="container py-4 position-relative d-flex justify-content-between align-items-center">
            <div class="logo">
                <img draggable="false"
                    src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/cropped-Group-39@2x.png"
                    alt="">
            </div>
            <div class="sections d-flex align-items-center">
                <span>HOME</span>
                <span>HOME</span>
                <span>HOME</span>
                <span>HOME</span>
                <span>HOME</span>
                <span>HOME</span>
            </div>
            <div class="actions d-flex align-items-center">
                <div class="button ">PURCHASE</div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
* {
    user-select: none;
}

.header-contacts {
    background-color: #3C3C3C;
    color: white;
    padding: 10px 37px;

    span {
        margin-right: 15px;
    }

    .social-links {
        color: white;
        cursor: pointer;
    }
}

.header-content {
    // SFUMATURA AL DI SOTTO DELL HEADER
    -webkit-box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);
}

.sections {
    // HO USATO QUESTO STILE PER CENTRARE PERFETTAMENTE LA SEZIONE CENTRALE AL CENTRO DEL PADRE A PRESCINDERE DELLA GRANDEZZA DEGLI ALTRI DUE ELEMENTI
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    span {
        margin-right: 30px;
    }
}

.actions {
    .button {
        padding: 15px 30px;
        border-radius: 30px;
        background: linear-gradient(90deg, rgba(153, 225, 94, 1) 0%, rgba(0, 217, 166, 1) 100%);
        color: white;
        cursor: pointer;
    }
}
</style>