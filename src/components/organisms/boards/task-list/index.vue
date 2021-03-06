<template>
    <div :class="$style.container">
        <div>
            <div :class="[$style.postButton, { [$style.open]: open }, { [$style.close]: !open }]">
                <IconedButton type="plusmini" :class="$style.add" @click="onAddClick" />
            </div>
            <div :class="[$style.postForm, { [$style.open]: open }, { [$style.close]: !open }]">
                <PostForm ref="postForm" @form-cancel="onCancelAddTask" @form-add="onAddTask" />
            </div>
        </div>
        <draggable
            v-model="taskList"
            :class="$style.list"
            filter=".ignore"
            tag="ul"
            v-bind="dragOptions"
            @end="onDragUpdeteList"
            @add="onDragAdd"
        >
            <li
                v-for="item in taskList"
                :key="item.task.id"
                :data-id="item.task.id"
                :data-board-id="dataBoardId"
            >
                <TaskListItem
                    :members-container="membersContainer"
                    :id="item.task.id"
                    :board-id="dataBoardId"
                    :my-editor-id="myEditorId"
                    :content="item.task.data"
                    :class="$style.listItem"
                    :editor="item.task.editing"
                    v-model="item.task.members"
                    @save-event="onSave"
                    @delete-event="onDelete"
                    @start-edit-task="onStartEdit"
                    @complete-edit-task="onCompleteEdit"
                />
            </li>
        </draggable>
    </div>
</template>

<script>
/**
 * タスク量産コンポーネント
 * task-list -> task-list-item
 */
import IconedButton from "@/components/molecules/iconed-button/";
import PostForm from "@/components/molecules/post-form/";
import draggable from "vuedraggable";
import TaskListItem from "@/components/organisms/boards/task-list-item/";
export default {
    name: "TaskList",
    props: {
        membersContainer: Object,
        value: Array,
        open: Boolean,
        dataBoardId: String,
        myEditorId: String
    },
    data: function() {
        return {
            showPost: false
        };
    },
    computed: {
        dragOptions() {
            return {
                animation: 200,
                group: "tasks",
                preventOnFilter: false,
                ghostClass: this.$style.ghost,
                forceFallback: true
            };
        },
        taskList: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    },
    methods: {
        /**
         * +ボタンをおして投稿フォームを展開
         */
        onAddClick: function(e) {
            this.changeOpen(!this.open);
            this.$refs.postForm.focus();
        },
        /**
         *投稿フォームがキャンセルされたので開閉を変更
         */
        onCancelAddTask: function(value) {
            this.changeOpen(false);
        },
        /**
         * 投稿フォームから追加されたので開閉を変更
         */
        onAddTask(value) {
            this.changeOpen(false);
            this.$emit("form-add", value);
        },
        /**
         * 開閉状態が変わった
         */
        changeOpen(value) {
            this.$emit("update:open", value);
        },
        /**
         * 保存された
         */
        onSave(value) {
            this.$emit("save-event", value);
        },
        /**
         * 削除された
         */
        onDelete: function(value) {
            this.$emit("delete-event", value);
        },
        /**
         * 同じタスクリストでソートされた
         */
        onDragUpdeteList(e) {
            let dataSet = e.item.dataset;
            this.$emit("drag-sort-list", dataSet);
        },
        /**
         * 外部からタスクがドラッグされた
         */
        onDragAdd(e) {
            let dataSet = e.item.dataset;
            this.$emit("drag-add-list", dataSet);
        },
        /**
         * 編集開始
         */
        onStartEdit(value) {
            this.$emit("start-edit-task", value);
        },
        /**
         * 編集終了
         */
        onCompleteEdit(value) {
            this.$emit("complete-edit-task", value);
        }
    },
    components: { PostForm, TaskListItem, IconedButton, draggable }
};
</script>
<style lang="scss" module>
.container {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 263px);
}
.postForm {
    overflow: hidden;
    margin: 3px 14px 15px 14px;
    height: 0px;
    opacity: 0;
    @include transiton($ms200);
}

.postForm.open {
    height: 170px;
    margin-bottom: 15px;
    opacity: 1;
}

.postForm.close {
    height: 0px;
    margin-bottom: 0;
    opacity: 0;
}

.postButton {
    overflow: hidden;
    height: 26px;
    margin-bottom: 15px;
    opacity: 1;
    @include transiton($ms300);
}

.postButton.open {
    height: 0px;
    margin-bottom: 0;
    opacity: 0;
}

.postButton.close {
    height: 26px;
    margin-bottom: 15px;
    opacity: 1;
}

.add {
    margin: 3px 14px 21px 14px;
}

.list {
    width: 100%;
    height: calc(100vh - 296px);
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 14px;
    user-select: none;
}
.listItem {
    margin: 0 0 16px 0;
    max-width: 238px;
}
.ghost {
    opacity: 0.3;
    cursor: move;
}
</style>
