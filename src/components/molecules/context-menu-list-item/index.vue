<template>
    <MenuButton v-bind={name,value} @click="onClick" />
</template>

<script>
import { MenuButton } from "@/components/atoms/base-button/compose";
import base from "@/components/utils/base-mixin";
export default {
    mixins:[base],
    name: 'ContextMenuListItem',
    props: {
        name:String,
        value:String,
        items:Array
    },
    components:{
        MenuButton
    }
}
</script>
<style lang="scss" module>
.class{

  
}
</style>


