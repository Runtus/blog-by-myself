<template>
    <div>
        <div class="main-layout" >
            <transition name="head-bar">
                <head-bar class="head-bar" ></head-bar>
            </transition>
<!--            <side-bar :style="{height : windowScreenHeight*0.4 + 'px'}" class="side-bar"></side-bar>-->
            <div class="content-box" >
                <router-view class="content"></router-view>
            </div>


            <div id="footer">
                <footer-foo></footer-foo>
            </div>



        </div>
        <transition name="bg" >
            <img class="pc bg"   src="https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E5%8D%9A%E5%AE%A2%E8%AE%BE%E7%BD%AE%E5%9B%BE%E7%89%87/background.jpg"  :style="{width : windowScreenWidth + 'px;' ,height : windowScreenHeight + 'px'}" alt="sd" v-if="beginTest">
        </transition>

        <transition name="bg">
            <img class="bg phone"   src="https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E5%8D%9A%E5%AE%A2%E8%AE%BE%E7%BD%AE%E5%9B%BE%E7%89%87/phone.jpg"  :style="{width :  windowScreenWidth + 'px;' ,height : windowScreenHeight + 'px'}" alt="sd" v-if="beginTest">
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
    width: 5%;
    top: 25%;


}

 .content{
    margin-left: 5%;
 }

 .bg{
     z-index: -2;
     top:0;
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



.phone{
    display: none;
}


@media screen and (max-width : 500px){
    .head-bar{

    }

    .pc{
        display: none;
    }
    .phone{
        display: block;
        left: 1px;
    }

    .content-box{
        margin-top: -100%;

    }

    .head-bar-1
    {
        margin-top: 100px;
    }

    .head-bar-2{

    }

    /*.head-bar-enter,.head-bar-leave-to{*/
    /*    margin-top : 0;*/
    /*}*/

    /*.head-bar-enter-active,.head-bar-leave-active{*/
    /*    transition: margin-top 0.2s;*/
    /*}*/

    /*.head-bar-to,.head-bar-leave{*/
    /*    margin-top: -10%;*/
    /*}*/
}
</style>
<script>
    import HeadBar from "./components/head-bar";
    import SideBar from "./components/side-bar";
    import FooterFoo from "./components/footer-foo";
    import ReturnTop from "./components/returnTop";
    import Login from "./components/login";
    export default {
        components: {Login, ReturnTop, FooterFoo, SideBar, HeadBar},
        data(){
            return {
                windowScreenHeight : window.screen.height,
                windowScreenWidth : window.screen.width,
                beginTest : false,
                currentWidth : "",

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
            setTimeout(() => {
                if(localStorage.loginData === "")
                {

                }else
                {
                    this.$store.state.loginData = JSON.parse(localStorage.loginData);
                    console.log(this.$store.state.loginData)
                }
            },500);


        },

    }
</script>