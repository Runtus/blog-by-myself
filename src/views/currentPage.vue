<template>
    <div style="width: 75%; position:relative;">
        <div  class="content-box" :style="{width :'100%'}">
            <div class="content" v-html="data" v-highlight style="font-size: 20px; line-height: 55px">

            </div>
        </div>

        <div class="button" >
            <Button size="large"   @click="returnBack">
                <Icon type="ios-arrow-back" />
                Backward
            </Button>
        </div>

        <div>
            <!--            评论系统放这里-->
        </div>
    </div>

</template>

<script>
    import showdown from "showdown"
    export default {
        name: "currentPage",
        data(){
            return {
                data : "",
                clientWidth : window.screen.width
            }
        },

        created() {
            let noteId = this.$route.params.noteId;
            let page = this.$route.params.page;
            this.$request.get(`/current-page/${page}/${noteId}`).then(result => {
                if(result.data.inf === "数据库为空")
                {
                    this.$Message.warning("数据库出错!");
                }
                else
                {
                    const converter = new showdown.Converter();
                    this.data = converter.makeHtml(result.data);
                    let newArray = this.data.split("img").map((data,index) => {
                        if(index > 0)
                        {
                            return ` style="width:700px;height : 200px"` + data;
                        }
                        else
                        {
                            return data;
                        }
                    });
                    console.log(newArray.join("img "));
                    this.data = newArray.join("img");
                }


            }).catch(err => {
                console.log(err);
            })
        },
        methods:{
            returnBack(){
                console.log(this.$route.params.pageNum);
                this.$router.push(`/home/${this.$route.params.pageNum}`);
            },
            searchAllTheImg(string){
                let position = [];
                let pos = string.indexOf("img");
                position.push(pos);
                while (pos > -1)
                {
                    pos = string.indexOf("img",pos+1);
                    position.push(pos);
                }
                return position;
            }

        }
    }
</script>

<style scoped>
.content-box{
    padding-bottom: 5%;
    background-color: rgba(245,245,245,0.7);

}


.content{
    /*border: 1px solid red;*/
    margin-left: 14%;
    width: 80%;

}


.button{
    margin-left: 44%;
    margin-top: 5%;
    margin-bottom: 10%;
}


 img{
     width: 400px;
 }
</style>