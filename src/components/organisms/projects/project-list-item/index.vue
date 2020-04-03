<template>
    <div :class="$style.projectListItem">
        <div :class="$style.thumb" @dblclick="onDClick">
            <BaseIcon compose="normal" type="logo" :class="$style.thumbIcon" />
            <ContextMenu
                :class="$style.contextMenu"
                @context-menu-click="onMenuClick"
                v-bind="{ menuItems, id }"
                compose="top"
            />
        </div>
        <ClickToEditableInput
            role="label"
            v-model.lazy="title"
            :class="$style.input"
        />
        <DateTimeText :date="date" :class="$style.date" />
    </div>
</template>

<script>
/**
 * プロジェクトアイコン本体
 *
 * project-unit -> project-list -> project-list-item
 */
import ClickToEditableInput from "@/components/molecules/click-to-editable-input/";
import DateTimeText from "@/components/atoms/base-time-text/date-time-text";
import BaseIcon from "@/components/atoms/base-icon/";
import ContextMenu from "@/components/molecules/context-menu/";
export default {
    name: "ProjectListItem",
    props: {
        id: String,
        value: String,
        date: Number
    },
    data: function() {
        return {
            menuItems: [
                {
                    value: "編集",
                    name: "edit"
                },
                {
                    value: "削除",
                    name: "delete"
                }
            ]
        };
    },
    computed: {
        title: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("edited-project-name", { name: value, id: this.id });
            }
        }
    },
    methods: {
        /**
         * コンテキストメニュー押された
         */
        onMenuClick(value) {
            value.title = this.title;
            this.$emit("context-menu-click", value);
        },
        /**
         * ダブルクリックされた
         */
        onDClick() {
            let value = { id: this.id, name: "edit", title: this.title };
            this.$emit("context-menu-click", value);
        }
    },
    components: { ContextMenu, DateTimeText, BaseIcon, ClickToEditableInput }
};
</script>
<style lang="scss" module>
.projectListItem {
    position: relative;
    width: 190px;
}
.thumb {
    position: relative;
    @include project;
    margin-bottom: 2px;

    .thumbIcon {
        fill: $theme;
        display: block;
        width: 94px;
        height: 126px;
        margin: 0 auto;
    }
    .contextMenu {
        position: absolute;
        bottom: 7px;
        right: 15px;
    }
    .contextMenu svg {
        fill: $theme;
    }
}

.input a {
    padding: 8px 0 0 0;
    margin: 5px 0 4px 0;
}

.date {
    @include dateText;
    margin-top: 2px;
}

.date:before {
    content: "Update:";
}
</style>
