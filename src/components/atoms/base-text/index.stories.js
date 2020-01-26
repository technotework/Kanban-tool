
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BaseText from "./index.vue";
import { CaptionText } from "./compose";

export default {
    title: "atoms/BaseText",
    component: { BaseText }
};

export const Basic = () => ({
    components: { BaseText, Theme },
    template: `<Theme><BaseText>あいうえお</BaseText></Theme>`
});

export const Caption = () => ({
    components: { CaptionText, Theme },
    template: `<Theme><CaptionText>あいうえお</CaptionText></Theme>`
});