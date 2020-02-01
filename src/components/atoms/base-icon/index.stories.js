import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import BaseIcon from "./index.vue";
import { NormalIcon, MiniIcon, LargeIcon } from "./compose";

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
    template: `<BaseIcon :width="width" :height="height" :round="round" :src="src" />`
});


export const Large = () => ({
    components: { LargeIcon },
    props: {
        src: { default: text("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg") }
    },
    template: `<LargeIcon :src="src" />`
});

export const Normal = () => ({
    components: { NormalIcon },
    props: {
        src: { default: text("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg") }
    },
    template: `<NormalIcon :src="src" />`
});

export const Mini = () => ({
    components: { MiniIcon },
    props: {
        src: { default: text("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg") }
    },
    template: `<MiniIcon :src="src" />`
});

