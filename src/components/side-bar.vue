<template>
    <div id="side-bar" style="min-width: 200px" >
        <div class="img"><img src="../assets/head.jpg"></div>
        <div>
            <div class="scroll-bar" :style="{height : scrollY/clientHeight * (windowHeight * 0.4) + 'px' }">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "side-bar",
        data()
        {
            return {
                scroll : "",
                clientHeight : document.body.clientHeight,
                scrollY : window.scrollY,
                windowHeight : window.screen.height
            }
        },
        created() {
            // console.log(window.screen.height)
        },
        mounted() {
            document.addEventListener("scroll",this.handleScroll);
        },
        methods:{
            handleScroll(){
                this.scrollY = window.scrollY;
            }
        }

    }
</script>

<style scoped>
#side-bar{
    background-color: white;
}



.img > img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-left: 25%;
    margin-top: 10%;
}

.scroll-bar{
    width: 20px;
    background-color: black;
}
</style>