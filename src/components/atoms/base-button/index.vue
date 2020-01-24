<template>
   <StyledBaseButton type="button" :value="value" :name="name" @click="onClick" />
</template>

<script>
import Vue from "vue"
import styled from "vue-styled-components";

const StyledBaseButton = styled.input`
    color: ${props => props.theme.color.black};
    `;

export default {
    name: 'BaseButton',
    props: {
        value: {
            type:String,
            default:"Button"
            },
        name: {name:String},
    },
    methods:{
        onClick(e){
            this.$emit("click",e);
        }
    },
    components:{StyledBaseButton}
}
</script>
