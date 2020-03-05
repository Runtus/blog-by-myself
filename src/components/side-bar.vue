<template>
    <div id="side-bar" style="min-width: 150px" >
        <div v-if="this.$store.state.loginData !== ''">
            <div class="img"><img :src="this.$store.state.loginData.headPhoto" alt="头像">
                <p >{{this.$store.state.loginData.name}}</p>
            </div>
            <div class="log-out">
                <Button class="log-out-button" @click="logout">退出</Button>
            </div>
<!--            <div>-->
<!--                <div class="scroll-bar" :style="{height : scrollY/clientHeight * (windowHeight * 0.4) + 'px' }">-->

<!--                </div>-->
<!--            </div>-->
        </div>
        <div v-else>
            <login></login>
        </div>
    </div>

</template>

<script>
    import Login from "./login";
    export default {
        name: "side-bar",
        components: {Login},
        data()
        {
            return {
                scroll : "",
                clientHeight : document.body.clientHeight,
                scrollY : window.scrollY,
                windowHeight : window.screen.height
            }
        },
        created() {
            // console.log(window.screen.height)
        },
        mounted() {
            document.addEventListener("scroll",this.handleScroll);
        },
        methods:{
            handleScroll(){
                this.scrollY = window.scrollY;
            },
            logout(){
                this.$request.get("/logout")
                .then((result) => {
                    if(result.data.status === "success")
                    {
                        this.$Message.success("已退出账号");
                        localStorage.removeItem("loginData");
                        this.$router.go(0);
                    }
                    else
                    {
                        this.$Message.warning("退出有错误，请去后台检查!");
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
        }

    }
</script>

<style scoped>
#side-bar{
    background-color: white;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
}



.img > img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    top: 5%;
    left: 1%;
    position: absolute;
    box-shadow: 2px 2px 5px 2px rgba(230,230,230,0.8);
}

.img > p{
    position: absolute;
    top: 35%;
    left: 15%;
}

.scroll-bar{
    width: 20px;
    background-color: black;
}

.log-out{
    position: absolute;
    bottom: 20%;
    left: 10%;
}
</style>