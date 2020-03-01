<template>
    <div class="class" >
            <div class="block-for-class" v-for="(data,index) in classArray" :style="{height : clientHeight * 0.3 + 'px'}" @click="turnToThePage(data.class)">
                <p class="title">{{data.class}}</p>
                <p class="number">{{data.num}}篇</p>
                <img class="img" :src="`https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E5%8D%9A%E5%AE%A2%E8%AE%BE%E7%BD%AE%E5%9B%BE%E7%89%87/${data.class}.png`" />
            </div>
    </div>
</template>

<script>
    export default {
        name: "class",
        data() {
            return {
                clientHeight : window.screen.height,
                classArray : []
            }
        },
        created() {
            this.$request.get("/class").then(result => {
                console.log(result.data);
                this.classArray = result.data.DBData.map(data => {return data;});

                console.log(this.classArray)
            }).catch(err => {
                console.log(err);
                this.$Message.warning("数据库错误，请联系作者");
            })
        },
        methods:{
            turnToThePage(classData)
            {
                console.log(classData);
                this.$router.push(`/class/${classData}`);
            }
        }
    }
</script>

<style scoped>
.class{
    width: 70%;
    background-color: rgba(244,244,244,0.7);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 10%;
    margin-left:auto ;
    margin-right: auto;
}



.block-for-class{
    width: 30%;
    height: 50%;
    border: 1px solid rgb(150,150,150);
    margin-top: 5%;
    margin-left: 4%;
    margin-right: 6%;
    position: relative;
    background-color: #CBCCCC;
    transition: background-color 0.2s linear, box-shadow  0.2s linear;
}

.block-for-class:hover{
    cursor: pointer;
    background-color: rgba(244,244,244,0.6);
    box-shadow: 2px 2px 3px 3px rgb(150,150,150);
}

.title{
    font-size: 40px;
    font-weight: 500;
    margin-top: 20%;
    margin-left: 10%;

}

.number{
    font-size: 30px;
    bottom: 1px;
    right: 3%;
    position: absolute;
    z-index: 1;
}

.img{
    width: 100px;
    height: 100px;
    opacity: 0.6;
    position: absolute;
    z-index: 0;
    left: 0;
    bottom: 0;

}


@media screen and (max-width: 500px){
    .class{
    width: 90%;

    }
    .block-for-class{
        width: 95%;
        margin: 4% auto;
        border: 1px solid rgba(230,230,230,0.9);
    }
}
</style>