
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import BaseModalCover from "./index.vue";

export default {
    title: "atoms/BaseModalCover",
    component: { BaseModalCover },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseModalCover, Theme },
    template: `<Theme><BaseModalCover backgroundColor="rgba(0,0,0,0.5)" @base-modal-cover-click-event="action">内容</BaseModalCover></Theme>`,
    methods: { action: action('base-modal-cover-click-event') }
});