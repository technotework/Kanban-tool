import { createDefStory } from "@/components/utils/story-creator";
import { boolean } from "@/components/utils/story-export";
import BaseEditableTextarea from "./index.vue";

const description =
    'import BaseEditableTextarea from "@/components/atoms/base-editable-textarea/"';
export default createDefStory(
    "atoms/BaseEditableTextarea",
    BaseEditableTextarea,
    description
);

//---------------------
//Basic

export const Basic = () => ({
    components: {
        BaseEditableTextarea
    },
    data: function() {
        return {
            myValue: ""
        };
    },
    props: {
        isedit: {
            default: boolean("isedit", false)
        }
    },
    template: `<BaseEditableTextarea v-bind={isedit} v-model.lazy="myValue" />`,
    methods: {}
});
