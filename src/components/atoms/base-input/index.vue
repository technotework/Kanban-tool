<template>
    <StyledBaseInput :width="width" :height="height" :padding="padding" :value="value" :name="name" :maxlength="maxlength" :placeholder="placeholder" :required="required" @input="onInput" />
</template>

<script>
import styled from "vue-styled-components";

const p = {
        width: String,
        height:String,
        padding:String
    }

const StyledBaseInput = styled("input",p)`
    padding: ${props => props.padding ? props.padding : props.theme.space.th};
    width:   ${props => props.width ? props.width : "auto"};
    height:  ${props => props.height ? props.height : "auto"};
`;

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