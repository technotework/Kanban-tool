<template>
    <div class="base-link-button">
    <StyledBaseLinkButton :mode="mode" :href="href" :target="target" :width="width" :height="height" :padding="padding" :backgroundColor="backgroundColor" :round="round" @click="onClick"><slot/></StyledBaseLinkButton>
    </div>
</template>

<script>
import StyledBaseLinkButton from './style.js';
export default {
    name: 'BaseLinkButton',
    props: {
        mode: {
            type:String,
            default:"button"
        },
        href:String,
        target:String,
        width: String,
        height:String,
        padding:String,
        backgroundColor:String,
        round:String
      },
      methods:{
        onClick(e){
            if(this.mode=="button"){

                this.$emit("click");  
            }
        }
      },
    components:{
        StyledBaseLinkButton
    }
}
</script>

<style lang="scss">

</style>