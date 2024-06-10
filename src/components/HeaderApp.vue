<script>
export default {
    name: 'HeaderApp',

}
</script>

<template>
    <div class="header-content d-flex px-5 py-4 justify-content-between">
        <div class="logo">
            <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/cropped-Group-39@2x.png" alt="">
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
</template>

<style scoped lang="scss">
.header-content {
    -webkit-box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 10px 37px 2px rgba(0, 0, 0, 0.3);
}

.sections {
    span {
        margin-right: 5px;
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