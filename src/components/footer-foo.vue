<template>
    <div id="footer" :style="{height : sidebar_height * 0.1 + 'px'}">
        <div class="footer-box">
            <a href="http://www.beian.miit.gov.cn" target="_blank">蜀ICP备&nbsp20004793号</a>
        </div>
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
    background-color: rgba(0,0,0,0);
}

.photo-name{
    background-color: greenyellow;
}

#footer{

}

.footer-box{
    border-radius: 10px;
    width: 95%;
    margin: 0 auto;
    padding-left: 10%;
    padding-top: 1.6em;
    height: 80%;
    background-color: rgba(244,244,244,0.4);


}

.footer-box > a{
    font-size: 20px ;
    font-weight: 500;
    /*display: block;*/
    color: white;


}
</style>