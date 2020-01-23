<template>
    <div class="base-check-box">
        <CheckBox :id="id" :name="name" :value="value" @change="onInput"><slot /></CheckBox>
    </div>
</template>

<script>
import CheckBox from './style.js';
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
        CheckBox
    }
}
</script>

<style lang="scss">

</style>