
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
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
    components: { BaseModalCover },
    props: {
        backgroundColor: { default: text("backgroundColor", "rgba(0,0,0,0.3)") },
        index: { default: text("index", "99998") }
    },
    template: `<BaseModalCover :backgroundColor="backgroundColor" :index="index" @base-modal-cover-click-event="action">内容</BaseModalCover>`,
    methods: { action: action('base-modal-cover-click-event') }
});