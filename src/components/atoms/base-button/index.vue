<template>
    <div class="base-button">
        <StyledBaseButton :value="value" :name="name" @click="onClick" />
    </div>
</template>

<script>
import StyledBaseButton from './style.js';
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
        onClick(){
            this.$emit("click");
        }
    },
    components:{StyledBaseButton}
}
</script>

<style lang="scss">

</style>