<script>

export default {
    name: "HomeSupportCard",

    props: ['card']
};
</script>
<template>
    <div class="support-card text-center shadow">
        <div class="desc pt-3" :class="card.theme">
            <div class="title-info py-3 bg-white">
                <div class="h3 fw-bold">
                    {{ card.title }}
                </div>
                <div>
                    {{ card.desc }}
                </div>
            </div>
            <h2 class="text-white py-4 d-flex align-items-center justify-content-center gap-2">
                <span>$</span>
                <span class="value">
                    {{ card.value }}
                </span>
                <span class="type fs-3">
                    {{ card.type }}
                </span>
            </h2>
        </div>
        <div class="info d-flex flex-column py-5 gap-3">
            <div v-for="feat in card.feats">
                {{ feat }}
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.support-card {
    border-radius: 15px;
    overflow: hidden;
}

.value {
    font-weight: 400;
    font-size: 3.2rem;
}

.desc {
    height: 40%;
}
</style>
