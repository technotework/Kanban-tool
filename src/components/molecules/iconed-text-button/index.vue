<template>
    <TransparentButton @click="onClick">
        <IconedText :type="type" :compose="compose"><slot /></IconedText>
    </TransparentButton>
</template>

<script>
import IconedText from "@/components/molecules/iconed-text/"
import {TransparentButton} from "@/components/atoms/base-no-link-button/compose"
import base from "@/components/utils/base-mixin";
export default {
    name: 'IconedTextButton',
    mixins: [base],
    props: {
        type:{type:String},
        compose:String
    },
    components:{
        IconedText,TransparentButton
    }
}
</script>
<style lang="scss" module>

</style>


