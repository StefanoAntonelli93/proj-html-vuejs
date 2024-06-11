<script>
export default {
    name: 'ServiceCard',
    props: [
        'iconClass',
        'cardName'
    ]
}
</script>


<template>
    <div class="content-card py-5 d-flex flex-column gap-2 align-items-center justify-content-between">
        <div class="circle">
            <font-awesome-icon class="fa-4x" :icon="iconClass" />
        </div>
        <div class="h3">
            {{ cardName }}
        </div>
        <p class="px-5 text-center">Far far away, behind the word mountains, far from the countries
            Vokalia..
        </p>
    </div>
</template>

<style>
.content-card {
    .circle {
        border: 3px solid #7AE6AF;
        border-radius: 50%;
        width: 135px;
        height: 135px;
        margin: 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:hover {
        background-color: rgba(39, 39, 39, 0.2);
        border-radius: 15px;
    }
}
</style>