<template>
    <div id="footer" :style="{height : sidebar_height * 0.05 + 'px'}">
        底部
    </div>
</template>

<script>
    export default {
        name: "footer-foo",
        data(){
            return {
                sidebar_height : window.screen.height
            }
        }

    }
</script>

<style scoped>
#footer{
    background-color: black;
}

.photo-name{
    background-color: greenyellow;
}
</style>