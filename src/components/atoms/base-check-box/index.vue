<template>
    <div class="base-check-box">
        <StyledBaseCheckBox :id="id" :name="name" :value="value" @change="onInput"><slot /></StyledBaseCheckBox>
    </div>
</template>

<script>
import StyledBaseCheckBox from './style.js';
export default {
    name: 'BaseCheckBox',
    props: {
        id: {type:String},
        name: {type:String},
        value:{type:String}
    },
    methods:{
        onInput(arg){
            
            this.$emit("change",arg);
        }
    },
    components:{
        StyledBaseCheckBox
    }
}
</script>

<style lang="scss">

</style>