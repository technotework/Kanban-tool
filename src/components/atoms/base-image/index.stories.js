import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import BaseImage from "./index.vue";

export default {
    title: "atoms/BaseImage",
    component: { BaseImage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseImage, Theme },
    template: `<Theme><BaseImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg" width="200px" alt="cat" /></Theme>`
});