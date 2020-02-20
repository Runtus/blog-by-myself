<template>
    <div>
        <div class="main-layout" :style="{width : windowScreenWidth + 'px',position : 'relative' }">
            <head-bar></head-bar>
            <side-bar :style="{height : windowScreenHeight*0.4 + 'px'}" class="side-bar"></side-bar>
            <div class="content-box" >
                <router-view class="content"></router-view>
            </div>
            <div id="footer">
                <footer-foo></footer-foo>
            </div>
            <transition name="bg" >
                <img src="./assets/bg.png" id="bg" :style="{width : windowScreenWidth + 'px;' ,height : windowScreenHeight + 'px'}" alt="sd" v-if="beginTest">
            </transition>
        </div>

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
     z-index: -1;
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
    transition: opacity 2.5s;
}
</style>
<script>
    import HeadBar from "./components/head-bar";
    import SideBar from "./components/side-bar";
    import FooterFoo from "./components/footer-foo";
    export default {
        components: {FooterFoo, SideBar, HeadBar},
        data(){
            return {
                windowScreenHeight : window.screen.height,
                windowScreenWidth : window.screen.width,
                beginTest : false
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

            this.beforeEnter();
            this.enter();
        },
        mounted() {
            this.beginTest = true;
        }
    }
</script>