import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import BaseIcon from "./index.vue";

export default {
    title: "atoms/BaseIcon",
    component: { BaseIcon },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseIcon, Theme },
    template: `<Theme><BaseIcon width="200px" height="200px" round="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg" /></Theme>`
});