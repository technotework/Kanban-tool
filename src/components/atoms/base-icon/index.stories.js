import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
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
    components: { BaseIcon, Theme },
    props: {
        width: { default: text("width", "200px") },
        height: { default: text("height", "200px") },
        round: { default: text("round", "100px") },
        src: { default: text("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg") }
    },
    template: `<Theme><BaseIcon :width="width" :height="height" :round="round" :src="src" /></Theme>`
});


export const Large = () => ({
    components: { LargeIcon, Theme },
    props: {
        src: { default: text("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg") }
    },
    template: `<Theme><LargeIcon :src="src" /></Theme>`
});

export const Normal = () => ({
    components: { NormalIcon, Theme },
    props: {
        src: { default: text("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg") }
    },
    template: `<Theme><NormalIcon :src="src" /></Theme>`
});

export const Mini = () => ({
    components: { MiniIcon, Theme },
    props: {
        src: { default: text("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg") }
    },
    template: `<Theme><MiniIcon :src="src" /></Theme>`
});

