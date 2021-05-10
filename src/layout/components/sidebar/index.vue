<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
                :default-active="getNowActive"
                :unique-opened="false"
                :collapse-transition="false"
                mode="vertical"
                @select="handleOpen"
                :collapse="isCollapse"
                active-text-color="#ffd04b"
                text-color="#fff"
                background-color="#304156">
            <el-menu-item :index="menuItemRoute[0]">
                <svg-icon svg-name="user"/>
                <span slot="title">Home</span>
            </el-menu-item>
        </el-menu>
    </el-scrollbar>
</template>

<script>
    export default {
        name: "Sidebar",
        data(){
            return {
                menuItemRoute:[
                    this.$router.options.routes[1].path + this.$router.options.routes[1].children[0].path //Home
                ]
            }
        },
        computed:{
            getRole(){
                return this.$store.state.user.userRole
            },
            isCollapse(){
                return !this.$store.state.app.sidebar.opened
            },
            getNowActive(){
                if(this.menuItemRoute.includes(this.$route.path))
                    return this.$route.path
                else{
                    for(let i=0;i<this.menuItemRoute.length;i++){
                        if(this.$route.path.indexOf(this.menuItemRoute[i])!==-1)
                            return this.menuItemRoute[i]
                    }
                    return this.$route.path
                }
            }
        },
        methods:{
            handleOpen(key){
                if(key !== this.$route.path)
                    this.$router.push({path:key})
            }
        }
    }
</script>

<style scoped>

</style>
