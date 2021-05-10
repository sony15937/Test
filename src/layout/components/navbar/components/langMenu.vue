<template>
    <el-dropdown class="lang-dropdown" trigger="click">
        <div><svg-icon class="lang-icon" svg-name="international"/></div>
        <el-dropdown-menu style="margin-top: 7px" slot="dropdown">
            <el-dropdown-item @click.native="switchLang('tw')">中文</el-dropdown-item>
            <el-dropdown-item @click.native="switchLang('en')">English</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
    import i18n from "../../../../i18n";
    export default {
        name: "langMenu",
        methods:{
            switchLang(lang){
                i18n.locale = lang
                localStorage.setItem('locale', lang)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .lang-dropdown{
        margin-right: 20px;
    }
    .lang-icon{
        position: center;
        cursor: pointer;
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 28px;
    }
</style>
