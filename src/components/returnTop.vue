<style scoped>
    .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>
<template>
    <BackTop :height="50" :bottom="100" height="600" >
        <div class="top">返回顶端</div>
    </BackTop>
</template>
<script>
    export default {
        name : "returnTop"
    }
</script>
