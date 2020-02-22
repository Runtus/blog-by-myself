<template>
    <div>
        <div class="main-layout" >
            <head-bar></head-bar>
<!--            <side-bar :style="{height : windowScreenHeight*0.4 + 'px'}" class="side-bar"></side-bar>--><!--功能暂时不实现-->
            <div class="content-box" >
                <router-view class="content"></router-view>
            </div>
            <div id="footer">
                <footer-foo></footer-foo>
            </div>

        </div>
        <transition name="bg" >
            <img src="./assets/bg.png" id="bg" :style="{width : windowScreenWidth + 'px;' ,height : windowScreenHeight + 'px'}" alt="sd" v-if="beginTest">
        </transition>
        <return-top></return-top>
    </div>
</template>

<style scoped>
.main-layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    position: relative;

}


.side-bar{
    position: fixed;
    width: 10%;
    top: 25%;


}

 .content{
    margin-left: 15%;
 }

 #bg{
     z-index: -2;
     top: 0;
     position: fixed;
 }

.bg-enter {
    opacity: 0;
}

.bg-enter-to {
    opacity: 1;
}
.bg-enter-active {
    transition: opacity 1s;
}
</style>
<script>
    import HeadBar from "./components/head-bar";
    import SideBar from "./components/side-bar";
    import FooterFoo from "./components/footer-foo";
    import ReturnTop from "./components/returnTop";
    export default {
        components: {ReturnTop, FooterFoo, SideBar, HeadBar},
        data(){
            return {
                windowScreenHeight : window.screen.height,
                windowScreenWidth : window.screen.width,
                beginTest : false,
                currentWidth : ""
            }
        },
        methods:{
            // beforeEnter(el){
            //     el.style.opacity = 0;
            // },
            // enter(el){
            //
            // }
        },
        created() {

        },
        mounted() {
            this.beginTest = true;
        },

    }
</script>