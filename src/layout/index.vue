<template>
    <div style="height: 100%">
        <el-button @click="logout">
            asd
        </el-button>
    </div>
</template>

<script>
    export default {
        name: "Layout",
        methods:{
            logout(){
                this.$store.dispatch('user/logout')
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>

</style>
