
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
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
    props: {
        backgroundColor: { default: text("backgroundColor", "rgba(0,0,0,0.3)") },
        index: { default: text("index", "99998") }
    },
    template: `<Theme><BaseModalCover :backgroundColor="backgroundColor" :index="index" @base-modal-cover-click-event="action">内容</BaseModalCover></Theme>`,
    methods: { action: action('base-modal-cover-click-event') }
});