
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import BaseLinkButton from "./index.vue";
//import { PrimaryButton, SecondaryButton, PrimaryLinkButton, SecondaryLinkButton } from "./compose";

export default {
    title: "atoms/BaseLinkButton",
    component: { BaseLinkButton },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseLinkButton },
    methods: { action: action('click') },
    props: {
        width: { default: text("width", "150px") },
        height: { default: text("height", "auto") },
        href: { default: text("href", "https://www.google.com/") },
        target: { default: text("target", "_blank") },
    },
    template: `
    
        <BaseLinkButton compose="primary" v-bind={width,height,target,href} @click="action">ボタン</BaseLinkButton>
    
    `
});
/*
export const Primary = () => ({
    components: { PrimaryButton },
    methods: { action: action('click') },
    props: {
        width: { default: text("width", "150px") },
        color: { default: color("color", "#000") }
    },
    template: `

        <PrimaryButton :width="width" :color="color" @click="action">ボタン</PrimaryButton>

    `
});

export const Secondary = () => ({
    components: { SecondaryButton },
    methods: { action: action('click') },
    props: {
        width: { default: text("width", "150px") },
        color: { default: color("color", "#000") }
    },
    template: `

        <SecondaryButton :width="width" :color="color" @click="action">ボタン</SecondaryButton>

    `
});


export const PrimaryLink = () => ({
    components: { PrimaryLinkButton },
    methods: { action: action('click') },
    props: {
        width: { default: text("width", "150px") },
        color: { default: color("color", "#000") },
        href: { default: text("href", "https://www.google.com/") },
        target: { default: text("target", "_blank") }
    },
    template: `

        <PrimaryLinkButton :width="width" :href="href" :target="target" :color="color" @click="action">ボタン</PrimaryLinkButton>

    `
});

export const SecondaryLink = () => ({
    components: { SecondaryLinkButton },
    methods: { action: action('click') },
    props: {
        width: { default: text("width", "150px") },
        color: { default: color("color", "#000") },
        href: { default: text("href", "https://www.google.com/") },
        target: { default: text("target", "_blank") }
    },
    template: `

    <SecondaryLinkButton :width="width" :href="href" :target="target" :color="color" @click="action">ボタン</SecondaryLinkButton>

    `
});
*/