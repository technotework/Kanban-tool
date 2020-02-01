
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import BaseModelessContainer from "./index.vue";

export default {
    title: "atoms/BaseModelessContainer",
    component: { BaseModelessContainer },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseModelessContainer },
    template: `<BaseModelessContainer top="100px" left="100px">内容</BaseModelessContainer>`
});