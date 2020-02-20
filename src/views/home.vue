<template>
    <div id="home" :style="{width : windowScreenWidth*0.75 + 'px'}">
        <div id="head-box" :style="{height : windowScreenHeight*0.3 + 'px'}">
            这里放置介绍和图片
        </div>
        <div id="content-box" v-for="(data,index) in dataList">
            <div class="singleBox" :style="{height : windowScreenHeight * 0.25 + 'px'}" v-if="index % 2 === 0" @click="turnToTheMoreInf(data)">
                <Row class="title">
                    <span>{{data.title}}</span>
                </Row>
                <Row class="class-time-box">
                    <Col class="class" span="7" offset="2">
                        {{data.class}}
                    </Col>
                    <Col class="time" span="9" offset="5">
                        {{data.time}}
                    </Col>
                </Row>
            </div>
            <div class="doubleBox" :style="{height : windowScreenHeight * 0.25 + 'px'}" v-if="index % 2 === 1" @click="turnToTheMoreInf(data)">
                <Row class="title">
                    <span>{{data.title}}</span>
                </Row>
                <Row class="class-time-box">
                    <Col class="class" span="7" offset="2">
                        {{data.class}}
                    </Col>
                    <Col class="time" span="9" offset="5">
                        {{data.time}}
                    </Col>
                </Row>
            </div>
        </div>
        <Row class="page">
            <Col span="12" offset="8">
                <Page :total="40"  show-elevator />
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return {
                windowScreenWidth: window.screen.width,
                windowScreenHeight : window.screen.height,
                dataList: [
                    {
                        single : 1,
                        title : "原型链中的原型和其他的咋起吧",
                        class : "javascript",
                        time : "2020-02-02",

                    },
                    {
                        single : 1,
                        title : "原型链",
                        class : "javascript",
                        time : "2020-02-02"
                    },
                    {
                        single : 1,
                        title : "原型链",
                        class : "javascript",
                        time : "2020-02-02"
                    },
                    {
                        single : 1,
                        title : "原型链",
                        class : "javascript",
                        time : "2020-02-02"
                    },
                    {
                        single : 1,
                        title : "原型链s",
                        class : "javascript",
                        time : "2020-02-02"
                    },
                    {
                        single : 1,
                        title : "原型链",
                        class : "javascript",
                        time : "2020-02-02"
                    },
                    {
                        single : 1,
                        title : "原型链",
                        class : "javascript",
                        time : "2020-02-02"
                    }
                ]
            }
        },
        methods:{
            turnToTheMoreInf(data){
                console.log("你们好!"+data);
            }
        }
    }
</script>

<style scoped>
#home{

    border: 1px solid black;
}


#head-box{
    width: 100%;
}

#content-box{
    width: 100%;
    border: 1px solid greenyellow;
    position: relative;
    display: flex;

}


.singleBox{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    width: 35%;
    border: 1px solid red;
    display: inline;
    margin-left: 10%;
    margin-top: -2%;
    position: relative;

}

.singleBox:first-child{
    margin-top: 3%;
}


.singleBox:hover{
    cursor: pointer;
}


.doubleBox {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    width: 35%;
    border: 1px solid blue;
    display: inline;
    margin-left: 53%;
    margin-top: -2%;
    position: relative;
}

.doubleBox:hover{
    cursor: pointer;
}


.title{
    font-size: 35px;
    font-weight: bold;
    margin-top: 1em;
    margin-left: 1em;
}

.class-time-box{
    border-top: 1px solid purple;
    position: absolute;
    width: 100%;
    bottom: 2em;
}

.class{
    border: 1px solid black;
    text-align: center;
    font-size: 20px;
    top: 0.6em;

}


.time{
    border: 1px solid orange;
    text-align: center;
    font-size: 20px;
    top: 0.6em;

}


.page{
    margin-top: 5%;
}
</style>