import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import BaseIcon from "./index.vue"
import { IconL, IconM, IconS } from "./compose"

export default {
    title: "atoms/BaseIcon",
    component: { BaseIcon },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseIcon },
    props: {
        width: { default: text("width", "200px") },
        height: { default: text("height", "200px") },
        round: { default: text("round", "100px") },
        src: { default: text("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg") }
    },
    template: `<BaseIcon v-bind="{width,height,round,src}" />`
});

export const L = () => ({
    components: { IconL },
    props: {
        src: { default: text("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg") }
    },
    template: `<IconL :src="src" />`
});

export const M = () => ({
    components: { IconM },
    props: {
        src: { default: text("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg") }
    },
    template: `<IconM :src="src" />`
});

export const S = () => ({
    components: { IconS },
    props: {
        src: { default: text("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg") }
    },
    template: `<IconS :src="src" />`
});



