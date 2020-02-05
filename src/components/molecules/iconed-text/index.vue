<template>
    <div :class="[$style.iconText,$compose[compose]]">
        <IconL :type="type" :class="$style.icon" /><BaseText :class="$style.text"><slot /></BaseText>
    </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
import { IconL } from "@/components/atoms/base-icon/compose"
import BaseText from "@/components/atoms/base-text/"
export default {
    mixins:[base],
    name: 'IconedText',
    props: {
        type:{type:String}
    },
    components:{
        IconL,BaseText
    }
}
</script>
<style lang="scss" module>
.iconText{
    @include flex;
}
.icon{
    fill:$theme;
}
.text{
    display: inline-block;
    @include p(0.2rem 0.5rem);
    @include text($f18);
    min-width: auto;
    user-select: none;
}
</style>
<style lang="scss" module="$compose">
.right{
    flex-direction: row-reverse;
}
.left{
    flex-direction: row;
}
</style>

