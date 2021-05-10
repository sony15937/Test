<template>
    <transition name="fade-transition" mode="out-in">
        <router-view :key="key"/>
    </transition>
</template>

<script>
    export default {
        name: "AppMain",
        computed:{
            key(){
                return this.$route.path
            }
        }
    }
</script>

<style scoped>

</style>
