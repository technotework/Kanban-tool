<template>
    <StyledBaseInput :width="width" :height="height" :padding="padding" :value="value" :name="name" :maxlength="maxlength" :placeholder="placeholder" :required="required" @input="onInput" />
</template>

<script>
import StyledBaseInput from "./style"

export default {
    name: 'BaseInput',
    props: {
        width:      {type:String},
        height:     {type:String},
        padding:    {type:String}, 
        value:      {type:String},
        name:       {type:String},
        maxlength:  {type:String},
        placeholder:{type:String},
        required:   {type:Boolean,default:false}
    },
    methods:{
        onInput(arg){
            
            this.$emit("input",arg);
        }
    },
    components:{
        StyledBaseInput
    }
}
</script>
<style lang="scss" module>
.class{

  
}
</style>
