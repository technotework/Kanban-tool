import Vue from "vue"
import ClickToEditableTextarea from "./index.vue"
import base from "@/components/utils/base-mixin";

function getMixin() {

    let mixin = {
        components: {
            ClickToEditableTextarea
        },
        template: `<ClickToEditableTextarea :content="content" :status="status" @save-event="onSave" 
    @delete-event="onDelete" @start-edit-task="onStartEdit" @complete-edit-task="onCompleteEdit">
    <slot /></ClickToEditableTextarea>`,
        props: {
            ...ClickToEditableTextarea.props
        },
        methods: {
            ...ClickToEditableTextarea.methods,
            onSave(value) {
                this.$emit("save-event", value);
            },
            onStartEdit() {
                this.$emit("start-edit-task");
            },
            onCompleteEdit() {
                this.$emit("complete-edit-task");
            }
        }
    }
    return mixin;
}

//--------
//Posted

const PostedTextarea = Vue.component("posted-textarea", {
    mixins: [base, getMixin()],
});
export {
    PostedTextarea
}