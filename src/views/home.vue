<template>
    <div id="home" >
        <Row id="head-box" :style="{height : windowScreenHeight*0.3 + 'px'}" type="flex" justify="space-between">
            <Col class="head-box-col-1" span="12">
                即使前路艰辛，亦要勇往直前。
            </Col>
            <Col class="head-box-col-2" span="4" >
                <img src="https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E5%8D%9A%E5%AE%A2%E8%AE%BE%E7%BD%AE%E5%9B%BE%E7%89%87/headphoto.jpg">
            </Col>
        </Row>
        <div class="wai-box">
            <div class="content-box" v-for="(data,index) in dataList">
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
        </div>
        <Row class="page">
            <Col span="12" offset="8">
                <Page :total="pageNum"  show-elevator @on-change="turnToNewPage"  :current="currentPage" />
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
                dataList: [],
                originDataList : [],
                pageNum : 10,//页数配置
                pageSize : 8,
                pageTotal: 10,//放置总响应页数
                currentPage : 1
            }
        },
        methods:{
            turnToTheMoreInf(data){
                console.log(data.noteId);
                this.$router.push(`/home/${this.currentPage}/${data.noteId}`);
            },

            computedPageNum(pageTotal) //计算适应于分页拦的页数配置
            {
                if(pageTotal <= this.pageSize)
                {
                    this.pageNum = 10;
                }
                else
                {
                    this.pageNum = Math.ceil(pageTotal / this.pageSize) * 10;
                    console.log(this.pageNum)
                }
            },
            turnToNewPage(index){
                console.log(index);
                this.$router.push(`/home/${index}`);

            }
        },
        created() {
            let page = this.$route.params.pageNum;
            this.currentPage = Number(page);
                this.$request.get(`/home/${page}`).then(result => {
                if(result.data.inf === 'success')
                {
                    this.dataList = result.data.dataList;
                    this.originDataList = [...this.dataList];
                    this.pageTotal = result.data.pageTotal;
                    this.computedPageNum(this.pageTotal);
                }
                else
                {
                    this.$Message.warning("无对应数据");
                }

            }).catch(err => {
                console.log(err);
                this.$Message.warning("数据库错误，请联系作者.");
            })
        },
        watch : {
            '$route'(to,from){
                if(to.params.pageNum !== from.params.pageNum){
                    this.$router.go(0);
                }
            }
        }
    }
</script>

<style scoped>
#home{
    width: 73%;
    /*border: 1px solid black;*/
}


#head-box{
    width: 100%;
    position: relative;
}


.wai-box{
    padding-bottom: 100px;
    background-color: rgba(245,245,245,0.6);
}


.content-box{
    width: 100%;
    position: relative;
    display: flex;




}



.head-box-col-1{
    height: 100%;
    border: 1px solid rgba(168,168,168,1);
    padding-top: 10%;
    padding-left: 3%;
    font-weight: 500;
    font-size: 30px;
    color: white;
    background-color: rgba(168,168,168,0.6);
}

.head-box-col-2{
    height: 100%;

}

.head-box-col-2 > img{
    height: 100%;
    width: 100%;
}
.singleBox{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    width: 35%;
    border-radius: 10px;
    border: 1px solid #DDDEDE;
    box-shadow: 3px 3px 4px 2px #EDEDED;
    display: inline;
    margin-left: 10%;
    margin-top: -2%;
    position: relative;
    background-color: white;
    transition: background-color 0.3s ease-out;
}

.singleBox:first-child{
    margin-top: 3%;
}

.singleBox:last-child{
    padding-bottom: 10%;
}

.singleBox:hover{
    cursor: pointer;
    background-color: rgba(245,245,245,0.6);
}


.doubleBox {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    width: 35%;
    display: inline;
    margin-left: 53%;
    margin-top: -8%;
    position: relative;
    background-color: white;
    transition: background-color 0.3s ease-out;
    border-radius: 10px;
    border: 1px solid #DDDEDE;
    box-shadow: 3px 3px 4px 2px #EDEDED;
}

.doubleBox:last-child{

}
.doubleBox:hover{
    cursor: pointer;
    background-color: rgba(245,245,245,0.6);
}

/*.doubleBox:*/


.title{
    font-size: 35px;
    font-weight: bold;
    margin-top: 1em;
    margin-left: 1em;
}

.class-time-box{
    border-top: 1px solid #CBCCCC;
    position: absolute;
    width: 100%;
    bottom: 2em;
}

.class{
    background-color: rgba(234,234,234,0.8);
    text-align: center;
    font-size: 20px;
    top: 0.6em;

}


.time{
    background-color: rgba(234,234,234,0.8);
    text-align: center;
    font-size: 20px;
    top: 0.6em;

}


.page{
    margin-top: 5%;
    margin-bottom: 10%;
}
</style>