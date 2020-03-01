<template>
    <div class="inf">
        <div v-for="item in DBdata" class="item"  :style="{height : clientHeight * beishu + 'px'}"  @click="turnToPage(item.noteId)">
            <p class="title">{{item.title}}</p>
            <p class="time">{{item.time}}</p>
            <img :src="`https://photo-1258955954.cos.ap-chengdu.myqcloud.com/%E5%8D%9A%E5%AE%A2%E8%AE%BE%E7%BD%AE%E5%9B%BE%E7%89%87/${thisPageClass}.png`" class="img">
        </div>

        <div class="button" >
            <Button size="large"   @click="returnBack">
                <Icon type="ios-arrow-back" />
                Backward
            </Button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "class-page-inf",
        data() {
           return {
               thisPageClass: "",
               DBdata: [],
               clientHeight : window.screen.height,
               beishu : ''
           }
        },
        created() {
            this.thisPageClass = this.$route.params.choose;
            console.log(this.thisPageClass);
            this.$request.get(`/class/${this.thisPageClass}`).then(
                result => {
                    console.log(result.data.DBData)
                    this.DBdata = result.data.DBData.map(data => {
                        return data;
                    })
                }
            ).catch(err => {
                console.log(err);
            });

            if(window.screen.width <= 500)
            {
                this.beishu = 0.3;
            }
            else{
                this.beishu = 0.2;
            }




        },
        methods:{
            returnBack(){
                this.$router.push("/class");
            },
            turnToPage(noteId){
                console.log(noteId);
                this.$router.push(`/class/${this.thisPageClass}/${noteId}`);
            }
        }
    }
</script>

<style scoped>
.inf{
    border: 1px solid rgba(244,244,244,0.5);
    width: 70%;
    padding-bottom: 6%;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(244,244,244,0.7);
    margin-bottom: 10%;
}


.item{
    height: 10%;
    width: 70%;
    margin: 6% auto;
    background-color: rgb(233,233,233);
    position: relative;
    padding-top: 30px;
    padding-left: 30px;
    border-radius: 10px;
    border: 1px solid rgb(144,144,144);
    transition: background-color 0.2s linear, box-shadow 0.2s linear;
}

.item:hover{
    background-color: rgba(233,233,233,0.6);
    box-shadow: 2px 2px 4px 3px rgb(144,144,144);
    cursor: pointer;
}

.title{
    font-size: 30px;
    font-weight: 500;
}

.time{
    font-size: 20px;
    position: absolute;
    bottom: 4px;
    right: 10px;
}

.img{
    opacity: 0.7;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 10px;
    right: 10px;
}

.button{
    margin-left: 42%;
}


@media screen and (max-width: 500px){
    .inf{
        position: relative;
        width: 90%;
    }

    .item{
        /*border: 1px solid black;*/
        width: 90%;
        position: relative;
        padding-top: 10px;
        padding-left: 10px;

    }

    .img{
        position: absolute;
        left: 0;
        top: 55%;

    }

    .button{
        margin-left: 33%;
    }
}
</style>