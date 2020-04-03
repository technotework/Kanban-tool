<template>
    <BaseModelessContainer :id="id" :items="menuItems">
        <ul>
            <li v-for="item in menuItems" :key="item.name">
                <BaseModelessItem
                    :value="item.value"
                    :name="item.name"
                    @click="onClick(id, item.name, $event)"
                />
            </li>
        </ul>
    </BaseModelessContainer>
</template>

<script>
/**
 *コンテキストメニューのボタンリスト
 */
import BaseModelessContainer from "@/components/atoms/base-modeless-container/";
import BaseModelessItem from "@/components/molecules/context-menu-list-item/";
import listener from "@/components/utils/listener-mixin";
export default {
    name: "ContextMenuList",
    mixins: [listener],
    created: function() {
        //自分自身以外が押されたら閉じる処理
        this.listen(
            window,
            "click",
            function(e) {
                if (!this.$el.contains(e.target)) {
                    this.$emit("close");
                }
            }.bind(this)
        );
    },
    props: {
        id: String,
        menuItems: { type: Array }
    },
    components: {
        BaseModelessContainer,
        BaseModelessItem
    },
    methods: {
        onClick(id, name, e) {
            this.$emit("context-menu-click", { id: id, name: name, e: e });
        }
    }
};
</script>
