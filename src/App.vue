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
            <img src="https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E5%8D%9A%E5%AE%A2%E8%AE%BE%E7%BD%AE%E5%9B%BE%E7%89%87/background.jpg" id="bg" :style="{width : windowScreenWidth + 'px;' ,height : windowScreenHeight + 'px'}" alt="sd" v-if="beginTest">
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