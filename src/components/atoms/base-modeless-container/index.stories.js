
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
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
    components: { BaseModelessContainer, Theme },
    template: `<Theme><BaseModelessContainer top="100px" left="100px">内容</BaseModelessContainer></Theme>`
});