<template>
    <div class= "most-out-box" >
        <div  class="content-box-x" >
            <div class="content-x" v-html="data" v-highlight >

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
                            if(window.screen.width > 500)
                            {
                                return ` style="width:700px;height : 300px"` + data;
                            }
                            else
                            {
                                return ` style="width:300px;height : 300px"` + data;
                            }

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

    .most-out-box{
        margin: 0 auto;
        width: 75%;
        position: relative;
        max-width: 1500px;

    }

    .content-box-x{

        margin: 0 auto;
        padding: 2%;
        background-color: rgba(245,245,245,0.7);


    }


    .content-x{
        /*border: 1px solid red;*/
        margin-left: 14%;
        width: 80%;
        font-size: 20px;
        line-height: 55px;

    }


    .button {
        margin-left: 44%;
        margin-top: 5%;
        margin-bottom: 10%;
    }


@media screen and (max-width: 500px){
    .most-out-box{
        width: 90%;
        margin: 0 auto;

    }



    .content-box-x{
        padding: 25px;
        border-radius: 20px;
    }

    .content-x{
        font-size: 14px;
        line-height: 35px;
    }

    .button {
        margin-left: 33%;

    }
}
</style>