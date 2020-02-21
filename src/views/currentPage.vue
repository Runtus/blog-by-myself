<template>
    <div>
        <div  class="content-box" :style="{width : clientWidth*0.75 + 'px'}">
            <div class="content" v-html="data" v-highlight style="font-size: 20px; line-height: 55px">

            </div>
        </div>

        <div class="button">
            <Button size="large" type="Content" ghost="true" @click="returnBack">
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
                    console.log(this.data);

                    // let arra y = document.
                }


            }).catch(err => {
                console.log(err);
            })
        },
        methods:{
            returnBack(){
                console.log(this.$route.params.pageNum);
                this.$router.push(`/home/${this.$route.params.pageNum}`);
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
    margin-left: 40%;
    margin-top: 5%;
    margin-bottom: 10%;
}


 img{
     width: 400px;
 }
</style>