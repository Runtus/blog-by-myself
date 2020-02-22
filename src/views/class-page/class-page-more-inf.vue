<template>
    <div style="width: 75%; position: relative;max-width: 1500px; ">
        <div  class="content-box" :style="{width : '100%'}">
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
    import showdown from "showdown";

    export default {
        name: "class-page-more-inf",
        data(){
            return {
                data : "",
                clientWidth : window.screen.width
            }
        },
        created() {
            this.$request.get(`class/current/${this.$route.params.noteId}`).then(
                result => {
                    const converter = new showdown.Converter();
                    this.data = converter.makeHtml(result.data.mdData);
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
                    this.data = newArray.join("img");
                }
            ).catch(err => {
                console.log(err);
                this.$Message.warning("后台系统错误，请联系作者");
            })
        },
        methods : {
            returnBack(){
                this.$router.push(`/class/${this.$route.params.choose}`)
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

</style>