import { action, styled, withKnobs, text, color, boolean, number, withInfo } from "@/components/utils/story-export"
import { createDefStory, createStory } from "@/components/utils/story-creator"
import BaseCheckBox from "./index.vue";
import BaseLabel from "@/components/atoms/base-form-label";

export default createDefStory("atoms/BaseCheckBox", BaseCheckBox);


export const Basic = () => ({
    components: { BaseLabel, BaseCheckBox },
    props: {
        id: { default: text("id", "cat") },
        value: { default: text("value", "ねこ") },
        name: { default: text("name", "cat") },
    },
    template: `
    <div>
        <BaseLabel :for="id"><BaseCheckBox :id="id" :name="name" :value="value" @change="action" />{{value}}</BaseLabel>
    </div>
    `,
    methods: { action: action('change') }
});