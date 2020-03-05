<template>
    <div class="login">
        <Button @click="login">登陆</Button>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                client_id : "fb36022b85f04c425075",
                redirect_url : 'http://127.0.0.1:8000/oauth/redirect',
                request_url : "https://github.com/login/oauth/authorize"
            }
        },
        methods : {
            login(){
                window.location.href = `${this.request_url}?client_id=${this.client_id}`
                // &redirect_uri=${this.redirect_url}
            }
        }
    }
</script>

<style scoped>

</style>