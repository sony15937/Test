<template>
    <el-container :class="classObj">
        <div v-if="sidebar.opened && device === 'mobile'" class="drawer-bg" @click="handleClickOutside"/>
        <sidebar class="sidebar-container"/>
        <el-container class="main-container">
            <el-header height="47px">
                <nav-bar/>
            </el-header>
            <el-main>
                <app-main/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import AppMain from './components/appmain'
    import NavBar from './components/navbar'
    import Sidebar from './components/sidebar'
    import resizeHandler from "./mixins/resizeHandler";
    export default {
        name: "Layout",
        components:{
            AppMain,
            NavBar,
            Sidebar
        },
        mixins:[resizeHandler],
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
            handleClickOutside(){
                this.$store.dispatch('app/closeSidebar',{withoutAnimation:false})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .drawer-bg{
        background-color: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }
</style>
