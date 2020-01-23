<template>
    <div class="base-editable-text">
        <StyledBaseEditableText :width="width" :height="height" />
    </div>
</template>

<script>
import StyledBaseEditableText from './style.js';
export default {
    name: 'BaseEditableText',
    props: {
        width:{type:String},
        height:{type:String}
    },
    components:{
        StyledBaseEditableText
    }
}
</script>

<style lang="scss">

</style>