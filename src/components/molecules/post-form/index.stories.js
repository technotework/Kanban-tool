import { createDefStory } from "@/components/utils/story-creator";
import { action } from "@/components/utils/story-export";
import PostForm from "./index.vue";

const description = 'import PostForm from "@/components/molecules/post-form/"';
export default createDefStory("molecules/PostForm", PostForm, description);

export const Basic = () => ({
    components: {
        PostForm
    },
    data: function() {
        return {
            myValue: "content"
        };
    },
    props: {},
    template: `<div style="padding:30px; background-color:#fff"><PostForm v-model.lazy="myValue" @form-add="add" @form-cancel="cancel" /></div>`,
    methods: {
        add: action("form-add"),
        cancel: action("form-cancel")
    }
});
