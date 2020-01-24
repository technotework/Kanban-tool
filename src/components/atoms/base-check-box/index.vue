<template>
    <StyledBaseCheckBox type="checkbox" :id="id" :name="name" :value="value" @change="onInput" />
</template>

<script>
import styled from "vue-styled-components";

const StyledBaseCheckBox = styled.input``;
    
export default {
    name: 'BaseCheckBox',
    props: {
        id: {type:String},
        name: {type:String},
        value:{type:String},
    },
    methods:{
        onInput(e){
            
            this.$emit("change", e.target.value);
        }
    },
    components:{
        StyledBaseCheckBox
    }
}
</script>

<style lang="scss">

</style>