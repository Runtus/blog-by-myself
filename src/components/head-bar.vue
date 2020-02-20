<template>
    <div id="head-bar"  :style="{height : clientHeight * 0.8 + 'px'}" >
        <Row class="row-1">

        </Row>
        <Row class="row-2" >
            <Col class="col-1-for-router" span="14" offset="3">
                <router-link to="/home" class="router">主页</router-link>/
                <router-link to="/home" class="router">关于我</router-link>/
                <router-link to="/home" class="router">分类</router-link>
            </Col>
            <Col span="5" class="col-2">
                <a href="https://github.com/RuntuS" target="_blank" >
                    <Icon type="logo-github" size="40" />
                </a>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "head-bar",
        data(){
            return {
                clientHeight : window.screen.height
            }
        },
        created() {
            this.$Message.success("你们好");
            console.log("你")
        }
    }
</script>

<style scoped>
#head-bar{
    /*background-color: darkgray;*/
    border: 1px blue solid;
    position: relative;


}


.row-2{
    width: 100%;
    height: 10%;
    /*border: 1px solid blue;*/
    position: absolute;
    bottom: 0;

}

.col-1-for-router{
    height: 100%;
    border: 1px solid red;
}

.col-2{
    height: 100%;
    border: 1px solid black;
}

.router{
    border: 1px solid black;
    font-size: 20px;
}
</style>