
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

    template: `<BaseModalCover :index="index" @base-modal-cover-click-event="action">内容</BaseModalCover>`,
    methods: { action: action('base-modal-cover-click-event') }
});