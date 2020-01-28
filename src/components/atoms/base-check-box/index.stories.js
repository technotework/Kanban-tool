import global from "@/components/themes/global-style";
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme";
import BaseCheckBox from "./index.vue";
import BaseLabel from "@/components/atoms/base-form-label";

export default {
    title: "atoms/BaseCheckBox",
    component: { BaseCheckBox }
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