<script>

import PartnerSection from '../components/PartnerSection.vue';
import HomeSupport from '../components/HomeSupport.vue';
import HomeInfoCard from '../components/HomeInfoCard.vue';
import HomeOurMission from '../components/HomeOurMission.vue';
import HomeStatistics from '../components/HomeStatistics.vue';

export default {
    name: 'Home',
    components: {
        PartnerSection,
        HomeSupport,
        HomeInfoCard,
        HomeOurMission,
        HomeStatistics,
    }
}

</script>

<template>
    <!--jumbo-->
    <div class="container-fluid">
        <div class="container-fluid">

            <div class="row">
                <div class="col-8">

                </div>
                <div class="col-4">

                </div>
            </div>

        </div>
    </div>

    <!--we are-->
    <section>
        <HomeInfoCard />
    </section>

    <!--learn more-->
    <section>
        <HomeOurMission />
    </section>
    
    <!--past projects-->
    <div class="container-fluid">

        <div class="row">
            <div class="col-6">
                <h2>
                    Our recentweb designs &
                    some examples of
                    past projects
                </h2>
            </div>
            <div class="col-6">
                <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                    blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                    ocean.Separated they live in Bookmarksgrove.Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                </p>
            </div>
        </div>

    </div>

    <!--examples-->
    <!--DA RIEMPIRE DINAMICAMENTE-->
    <div class="container-fluid">

        <div class="row">
            <div class="col-3">
                <div class="card text-bg-dark">
                    <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/ina-soulis-227104-unsplash-1024x1024.jpg"
                        class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title">The Basket of flowers</h5>
                        <p class="card-text">BRANDING</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card text-bg-dark">
                    <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/sunisa-misa-531163-unsplash-1024x1024.jpg"
                        class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title">The Basket of flowers</h5>
                        <p class="card-text">BRANDING</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card text-bg-dark">
                    <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/355H-1024x1024.jpg"
                        class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title">The Basket of flowers</h5>
                        <p class="card-text">BRANDING</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card text-bg-dark">
                    <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/photo-1448932252197-d19750584e56-1024x1024.jpg"
                        class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title">The Basket of flowers</h5>
                        <p class="card-text">BRANDING</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <div class="card text-bg-dark">
                    <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/business-competition-PB366D8-1024x1024.jpg"
                        class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title">The Basket of flowers</h5>
                        <p class="card-text">BRANDING</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card text-bg-dark">
                    <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg"
                        class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title">The Basket of flowers</h5>
                        <p class="card-text">BRANDING</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card text-bg-dark">
                    <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/aa9a4539-PQGJ7HU-1024x1024.jpg"
                        class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title">The Basket of flowers</h5>
                        <p class="card-text">BRANDING</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card text-bg-dark">
                    <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/cody-davis-253928-unsplash-1024x1024.jpg"
                        class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title">The Basket of flowers</h5>
                        <p class="card-text">BRANDING</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!--we love-->
    <section>
        <HomeStatistics />
    </section>

    <!--support-->
    <section>
        <HomeSupport />
    </section>

    <!--reviews-->
    <div class="container-fluid text-center reviews">
        <p>
            When it comes to barbequing, there are two main schools of thought for the techniques that you can use. Freshly
            scrambled eggs with applewood smoked bacon - are amazing!
        </p>
        <img src="" alt="">
        <h5>
            LISSA DURBIN
        </h5>
        <p>
            Client
        </p>
    </div>

    <!--blog-->
    <div class="container-fluid text-center">
        <h2>Latest News & Our Blog</h2>
        <div class="row">
            <div class="col">
                <div class="card">
                    <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024x768.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">May 24, 2018 - by Alex</p>
                        <h4>Marketing Ideas</h4>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/Businessman-at-the-desk-in-his-office-resting.-1024x768.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">May 24, 2018 - by Alex</p>
                        <h4>Marketing Ideas</h4>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">May 24, 2018 - by Alex</p>
                        <h4>Marketing Ideas</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="button">VIEW ALL POSTS</div>
    </div>

    <!--partners-->
    <PartnerSection />
</template>

<style scoped lang="scss">
img {
    width: 100%;
}

.card {
    height: 100%;
}

.we-love {

    .col-6:first-of-type {
        background-image: url('https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/person-with-long-curly-hair-PZ99QM2@2x.jpg');
    }

}

.reviews {
    background-image: url('https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg');
}</style>