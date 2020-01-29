import { global, action, Theme, styled, withKnobs, text, color, number, array, object, withInfo } from "@/components/themes/story-export"
import BaseSelect from "./index.vue";

export default {
    title: "atoms/BaseSelect",
    component: { BaseSelect },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseSelect, Theme },
    data: function () {
        return {
            selected: "",
            items: [
                { value: "cat", content: "ねこさん" },
                { value: "dog", content: "いぬさん" },
                { value: "panda", content: "ぱんださん" }
            ]
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
    template: `<Theme><BaseSelect :name="name" :items="items" v-model="selected" @change="action" /></Theme>`,
    methods: { action: action('change') }
});