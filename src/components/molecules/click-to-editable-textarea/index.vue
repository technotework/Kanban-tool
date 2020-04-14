<template>
    <div :class="$style.wrapper">
        <BaseEditableTextarea
            v-model.lazy="textareaContent"
            :class="$style.textarea"
            :isedit="status == 'ME'"
            ref="textarea"
            @meta-enter="onSave"
            @dblclick="onDClick"
        />
        <div :class="$style.nav">
            <div :class="$style.option">
                <slot />
            </div>
            <div :class="$style.buttons">
                <template v-if="status == 'ME'">
                    <SecondaryMiniButton :class="$style.button" @click="onCancel"
                        >キャンセル</SecondaryMiniButton
                    >
                    <PrimaryMiniButton :class="$style.button" @click="onSave"
                        >保存</PrimaryMiniButton
                    >
                </template>
                <template v-else>
                    <ContextMenu
                        @context-menu-click="onMenuClick"
                        v-bind="{ menuItems }"
                        compose="top"
                        :class="$style.menu"
                    />
                </template>
            </div>
        </div>
    </div>
</template>

<script>
/**
 * 編集削除コンテキストメニュー付きテキストエリア
 * 編集ロックをかけるので、編集者が自分なのか他人なのかを判定している
 */
import ContextMenu from "@/components/molecules/context-menu/";
import base from "@/components/utils/base-mixin";
import BaseEditableTextarea from "@/components/atoms/base-editable-textarea/";
import {
    PrimaryMiniButton,
    SecondaryMiniButton
} from "@/components/atoms/base-no-link-button/compose";

export default {
    mixins: [base],
    name: "ClickToEditableTextarea",
    props: {
        content: String,
        status: String
    },
    data: function() {
        return {
            textareaContent: "",
            temp: "", //キャンセルのために一時データバックアップ

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
    watch: {
        content: {
            immediate: true,
            handler(value) {
                this.textareaContent = value;
            }
        },
        status: {
            immediate: true,
            handler(value) {
                if (value == false && this.temp != "") {
                    this.textareaContent = this.temp;
                }
            }
        }
    },
    methods: {
        /**
         * handlers
         */
        onMenuClick: function(value) {
            if (value.name == "delete") {
                this.onDelete();
            } else if (value.name == "edit") {
                this.onEdit();
                this.$emit("start-edit-task");
            }
        },
        onDClick: function() {
            this.onEdit();
            this.$emit("start-edit-task");
        },
        onEdit: function() {
            //キャンセル用にデータバックアップ
            this.temp = this.$refs.textarea.getContent();
        },
        onDelete: function() {
            this.$emit("delete-event");
        },
        onSave: function() {
            //キャンセル用バックアップを消去してテキストエリアにはいっているデータを取得しemitする
            this.temp = "";
            let value = this.$refs.textarea.getContent();
            this.$emit("save-event", { value: value });
            this.$emit("complete-edit-task");
        },
        onCancel: function() {
            //データ復帰処理
            this.textareaContent = this.temp;
            this.$emit("complete-edit-task");
        }
    },
    components: {
        BaseEditableTextarea,
        PrimaryMiniButton,
        SecondaryMiniButton,
        ContextMenu
    }
};
</script>
<style lang="scss" module>
.wrapper {
    padding: 0 0 3px 0;
}
.textarea {
    min-height: 80px;
}
.nav {
    margin: 8px 0 0 1px;
    display: flex;
    justify-content: space-between;
}
.menu svg {
    margin: 6px 10px 0 0;
}
.buttons {
    display: flex;
}
.button {
    margin-left: 6px;
}
</style>
