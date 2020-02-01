import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export";
import BaseCheckBox from "./index.vue";
import BaseLabel from "@/components/atoms/base-form-label";

export default {
    title: "atoms/BaseCheckBox",
    component: { BaseCheckBox },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseLabel, BaseCheckBox, Theme },
    props: {
        id: { default: text("id", "cat") },
        value: { default: text("value", "ねこ") },
        name: { default: text("name", "cat") },
    },
    template: `
    <div>
        <Theme>
        <BaseLabel :for="id"><BaseCheckBox :id="id" :name="name" :value="value" @change="action" />{{value}}</BaseLabel>
        </Theme>
    </div>
    `,
    methods: { action: action('change') }
});