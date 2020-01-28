import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export";
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
    template: `
    <div>
        <Theme>
        <BaseLabel for="cat"><BaseCheckBox id="cat" name="animal" value="ねこ" @change="action" />ねこ</BaseLabel>
        </Theme>
    </div>
    `,
    methods: { action: action('change') }
});