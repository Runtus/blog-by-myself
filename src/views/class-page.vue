<template>
    <div class="class">
        <div class="content" :style="{height : clientHeight * 0.5 + 'px'}">

        </div>
    </div>
</template>

<script>
    export default {
        name: "class",
        data() {
            return {
                clientHeight : window.screen.height
            }
        }
    }
</script>

<style scoped>
.class{
    width: 100%;
    border : 1px solid black;
    background-color: rgba(244,244,244,0.5);
}

.content {
    width: 70%;

}
</style>