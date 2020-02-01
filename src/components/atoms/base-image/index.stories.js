import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
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
    components: { BaseImage },
    props: {
        src: { default: text("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg") },
        width: { default: text("width", "200px") },
        height: { default: text("height", "auto") },
        round: { default: text("round", "8px") },
        alt: { default: text("alt", "cat") },
    },
    template: `<BaseImage v-bind="{width,height,round,alt,src}" />`
});