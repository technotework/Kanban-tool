import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import BaseText from "./index.vue";
import { CaptionText } from "./compose";

export default {
    title: "atoms/BaseText",
    component: { BaseText },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseText, Theme },
    template: `<Theme><BaseText>あいうえお</BaseText></Theme>`
});

export const Caption = () => ({
    components: { CaptionText, Theme },
    template: `<Theme><CaptionText>あいうえお</CaptionText></Theme>`
});