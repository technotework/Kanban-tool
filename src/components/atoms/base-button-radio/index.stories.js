import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import BaseButtonRadio from "./index.vue";

let description = 'import BaseButtonRadio from "@/components/atoms/base-button-radio/"';
export default createDefStory("atoms/BaseButtonRadio", BaseButtonRadio, description);

export const Basic = () => ({
    components: { BaseButtonRadio },
    data: function () {
        return {
            isActive: "radio1",
        }
    },
    props: {

    },
    template: `
    <div>
    <BaseButtonRadio name="radio" target="radio1" value="radio1" v-model="isActive">A</BaseButtonRadio>
    <BaseButtonRadio name="radio" target="radio2" value="radio2" v-model="isActive">B</BaseButtonRadio>
    </div>`,
    methods: { action: action('change') }
});