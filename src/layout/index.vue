<template>
    <el-container :class="classObj">
        <div/>
        <sidebar />
        <el-container>
            <el-header>
                <nav-bar />
            </el-header>
            <el-main>
                <app-main/>
            </el-main>
        </el-container>
        <el-button @click="logout">
            asd
        </el-button>
    </el-container>
</template>

<script>
    import AppMain from './components/appmain'
    import NavBar from './components/navbar'
    import Sidebar from './components/sidebar'
    export default {
        name: "Layout",
        components:{
            AppMain,
            NavBar,
            Sidebar
        },
        computed:{
            sidebar(){
                return this.$store.state.app.sidebar
            },
            device(){
                return this.$store.state.app.device
            },
            classObj(){
                return{
                    hideSidebar: !this.sidebar.opened,
                    openSidebar: this.sidebar.opened,
                    withoutAnimation: this.sidebar.withoutAnimation,
                    mobile: this.device === 'mobile'
                }
            }
        },
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
