<template>
    <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
            <el-avatar shape="square" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" class="user-avatar"/>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link to="/">
                <el-dropdown-item>
                    Home
                </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click.native="logout">
                <span style="display:block;">Log Out</span>
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
    export default {
        name: "userMenu",
        methods:{
            async logout(){
                await this.$store.dispatch('user/logout')
                this.$router.push({path:'/login'})
            }
        }
    }
</script>

<style scoped>

</style>
