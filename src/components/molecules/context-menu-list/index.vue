<template>
    <BaseModelessContainer :id="id" :items="items" :class="$style.menu">
    <ul >
        <li v-for="item in items" :key="item.name" :class="$style.menuItem">
            <BaseModelessItem :value="item.value" :name="item.name" @click="onClick(id,item.name)"/>
        </li>
    </ul>
        
    </BaseModelessContainer>
</template>

<script>
import BaseModelessContainer from "@/components/atoms/base-modeless-container/"
import BaseModelessItem from "@/components/molecules/context-menu-list-item/"

export default {
    name: 'ContextMenuList',
    props: {
        id:String,
        items: { type: Array },
    },
    components:{
        BaseModelessContainer,
        BaseModelessItem
    },
    methods:{
        onClick(id,name) {
            this.$emit("context-menu-click",{id:id,name:name});
        },
    }
}
</script>
<style lang="scss" module>
.menu{
  @include shadow;
  @include p($s4);
  @include bdc($gray);
  @include bgc($white);
}

.menuItem{
    
}
</style>