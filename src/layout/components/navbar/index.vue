<template>
    <div>
        <i v-if="isCollapse" class="el-icon-s-unfold" @click="toggleSidebar"/>
        <i v-else class="el-icon-s-fold" @click="toggleSidebar"/>
        <div class="right-menu">
            <lang-menu/>
            <user-menu/>
        </div>
    </div>
</template>

<script>
    import userMenu from "./components/userMenu";
    import langMenu from "./components/langMenu";
    export default {
        name: "NavBar",
        components:{
            userMenu,
            langMenu
        },
        computed:{
            isCollapse(){
                return !this.$store.state.app.sidebar.opened
            }
        },
        methods:{
            toggleSidebar(){
                this.$store.dispatch('app/toggleSidebar')
            }
        }
    }
</script>

<style scoped>
    .el-icon-s-fold,.el-icon-s-unfold{
        margin-left: 0;
        margin-top: 10px;
        float: left;
        font-size: 25px;
        cursor: pointer;
    }
</style>
