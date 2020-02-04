import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import BaseSelect from "./index.vue";

let description = 'import BaseSelect from "@/components/atoms/base-select/"';
export default createDefStory("atoms/BaseSelect", BaseSelect, description);

export const Basic = () => ({
    components: { BaseSelect },
    data: function () {
        return {
            selected: "",

        }
    },
    props: {
        name: { default: text("name", "select-box-name") },
        items: {
            default: object("items", [
                { value: "cat", content: "ねこさん" },
                { value: "dog", content: "いぬさん" },
                { value: "panda", content: "ぱんださん" }
            ])
        }
    },
    template: `<BaseSelect :name="name" :items="items" v-model="selected" @change="action" />`,
    methods: { action: action('change') }
});