<script>

import HomeCarousel from '../components/HomeCarousel.vue';
import PartnerSection from '../components/PartnerSection.vue';
import HomeSupport from '../components/HomeSupport.vue';
import HomeInfoCard from '../components/HomeInfoCard.vue';
import HomeOurMission from '../components/HomeOurMission.vue';
import HomeStatistics from '../components/HomeStatistics.vue';
// import HomePastProjects from '../components/HomePastProjects.vue';
import HomeReviews from '../components/HomeReviews.vue';

export default {
    name: 'Home',
    components: {
        HomeCarousel,
        PartnerSection,
        HomeSupport,
        HomeInfoCard,
        HomeOurMission,
        HomeStatistics,
        // HomePastProjects,
        HomeReviews,
    }
}

</script>

<template>
    <!--jumbo-->
    <section>
        <HomeCarousel />
    </section>


    <!--we are-->
    <section>
        <HomeInfoCard />
    </section>

    <!--learn more-->
    <section>
        <HomeOurMission />
    </section>

    <!--past projects-->
    <section>
        <HomePastProjects />
    </section>

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
    <section>
        <HomeReviews />
    </section>

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
}
</style>