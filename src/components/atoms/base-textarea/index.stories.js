import { createDefStory } from "@/components/utils/story-creator";
import BaseTextArea from "./index.vue";

const description =
    'import BaseTextArea from "@/components/atoms/base-textarea/"';
export default createDefStory("atoms/BaseTextArea", BaseTextArea, description);

//---------------------
//Basic

export const Basic = () => ({
    components: {
        BaseTextArea
    },
    data: function() {
        return {
            content: ""
        };
    },
    props: {},
    template: `<BaseTextArea v-model.lazy="content" />`,
    methods: {}
});
