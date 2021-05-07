<template>
    <svg :class="iconClass" aria-hidden="true" v-on="$listeners">
        <use :xlink:href="iconName"/>
    </svg>
</template>

<script>
    export default {
        name: "SvgIcon",
        props:{
            svgName:{
                type:String,
                required:true
            },
            svgClass:{
                type:String,
                default:''
            }
        },
        computed:{
            iconName(){
                return `#icon-${this.svgName}`
            },
            iconClass(){
                if(this.svgClass){
                    return 'svg-icon ' + this.svgClass
                }
                else{
                    return 'svg-icon'
                }
            }
        }
    }
</script>

<style scoped>
    .svg-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .svg-external-icon {
        background-color: currentColor;
        mask-size: cover!important;
        display: inline-block;
    }
</style>
