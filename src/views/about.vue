<template>
    <div class="about" :style="{width : clientWidth * 0.7 + 'px',height : clientHeight * 0.8 + 'px'}">
        <div class="Content">
            <ul class="ul">
                <li class="p">在读高校生.</li>
                <li class="p">喜欢Web开发，主攻前端，熟悉Vue，会一点node.</li>
                <li class="p">平时喜欢听听音乐.</li>
                <li class="p">这篇blog的前端代码在我的github仓库里.</li>
                <li class="p">如有不足，欢迎和我多多交流.</li>
            </ul>
            <div class="ul ul-2">
                <div class="p img"><img src="../assets/head.jpg"  alt="头像"/></div>
                    <div class="font-content">
                        <ul class="ul-3">
                            <li class="p-2"><img src="../assets/QQ.png" style="width: 23px;margin-right: 10px">邮箱 : 893119806@qq.com</li>
                            <li class="p-2"><Icon type="logo-github" style="margin-right: 10px"/>github地址: <a href="https://github.com/RuntuS">https://github.com/RuntuS</a></li>
                        </ul>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about",
        data(){
            return {
                clientHeight : window.screen.height,
                clientWidth : window.screen.width
            }
        }
    }
</script>

<style scoped>
.about{
    position: relative;
}

.Content{
    width: 100%;
    height: 100%;
    border: 1px solid black;
    background-color: rgba(233,233,233,0.8);
    position: relative;
}

.ul{
    list-style: none;
    margin-top: 5%;
    margin-left: 5%;
    /*border: 1px solid black;*/
    width: 70%;
    padding: 20px;
    background-color: white;
    transition: box-shadow 0.3s linear;
    box-shadow: 1px 1px 1px 5px rgb(200,200,200);
}

.ul:hover{
    box-shadow: 1px 1px 3px 5px rgb(150,150,150);
}



.p{
    font-size: 26px;
    line-height: 60px;
}

.ul-2{
    width: 57%;
    display: flex;
    flex-direction: row;
}

.img > img{
    width: 60%;
    border-radius: 10px;
}

.ul-3{
    list-style: none;
}

.p-2{
    font-size: 25px;
    font-weight: 500;
}
</style>