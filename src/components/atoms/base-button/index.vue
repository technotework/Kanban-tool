<template>
    <div class="base-button">
        <Button :value="value" :name="name" @click="onClick" />
    src/components/atoms/base-button/index.vue
    </div>
</template>

<script>
import Button from './style.js';
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
    components:{Button}
}
</script>

<style lang="scss">

</style>