<script>

export default {
    name: 'HeaderApp',

}
</script>

<template>
    <div class="main-container">
        <div class="header-contacts">
            <!-- COME GESTIRE IL CONTAINER? -->
            <div class="container d-flex justify-content-between">
                <div class="contact-numbers">
                    <font-awesome-icon class="pe-3" icon="fa-solid fa-phone" />
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
                <div class="sections d-flex gap-5 align-items-center">
                    <!-- CAPIRE COME USARE ACTIVECLASS DI ROUTER -->
                    <router-link class="link" exactActiveClass="text-black" :to="{ name: 'home' }">
                        <span>HOME</span>
                    </router-link>
                    <router-link class="link" :to="{ name: 'about' }">
                        <span>ABOUT</span>
                    </router-link>
                    <router-link class="link" :to="{ name: 'home' }">
                        <span>SERVICES</span>
                    </router-link>
                    <router-link class="link" :to="{ name: 'home' }">
                        <span>SHOWCASE</span>
                    </router-link>
                    <router-link class="link" :to="{ name: 'home' }">
                        <span>BLOG</span>
                    </router-link>
                    <router-link class="link" :to="{ name: 'contacts' }">
                        <span>CONTACTS</span>
                    </router-link>
                </div>
                <div class="actions d-flex align-items-center">
                    <div class="button ">PURCHASE</div>
                    <font-awesome-icon class="clickable secondary-color ps-4" icon="fa-solid fa-magnifying-glass" />
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/_variables.scss' as *;

* {
    user-select: none;
}

.main-container {
    background-color: white;
    z-index: 999;
    position: fixed;
    left: 0;
    right: 0;
}

.header-contacts {
    background-color: $primary-color;
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

    .clickable {
        cursor: pointer;
    }
}

.sections {
    // HO USATO QUESTO STILE PER CENTRARE PERFETTAMENTE LA SEZIONE CENTRALE AL CENTRO DEL PADRE A PRESCINDERE DELLA GRANDEZZA DEGLI ALTRI DUE ELEMENTI
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    .link {
        text-decoration: none;
        color: #3D3D3D;

        &:hover {
            color: $secondary-text-color;
        }
    }

}
</style>