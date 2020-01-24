<template>
    <StyledBaseEditableText :width="width" :height="height" contenteditable="true">
        <slot/>
    </StyledBaseEditableText>
</template>

<script>
import StyledBaseEditableText from "./style"

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