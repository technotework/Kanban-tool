
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import BaseLinkButton from "./index.vue";
import { PrimaryButton, SecondaryButton, PrimaryLinkButton, SecondaryLinkButton } from "./compose";

export default {
    title: "atoms/BaseLinkButton",
    component: { BaseLinkButton },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseLinkButton, Theme },
    methods: { action: action('click') },
    props: {
        mode: { default: text("mode", "button") },
        width: { default: text("width", "150px") },
        href: { default: text("href", "https://www.google.com/") },
        target: { default: text("target", "_blank") },
        color: { default: color("color", "#000") },
    },
    template: `
    <Theme>
        <BaseLinkButton mode="button" :width="width" @click="action">ボタン</BaseLinkButton>
    </Theme>
    `
});

export const Primary = () => ({
    components: { PrimaryButton, Theme },
    methods: { action: action('click') },
    props: {
        width: { default: text("width", "150px") },
        color: { default: color("color", "#000") }
    },
    template: `
    <Theme>
        <PrimaryButton :width="width" :color="color" @click="action">ボタン</PrimaryButton>
    </Theme>
    `
});

export const Secondary = () => ({
    components: { SecondaryButton, Theme },
    methods: { action: action('click') },
    props: {
        width: { default: text("width", "150px") },
        color: { default: color("color", "#000") }
    },
    template: `
    <Theme>
        <SecondaryButton :width="width" :color="color" @click="action">ボタン</SecondaryButton>
    </Theme>
    `
});


export const PrimaryLink = () => ({
    components: { PrimaryLinkButton, Theme },
    methods: { action: action('click') },
    props: {
        width: { default: text("width", "150px") },
        color: { default: color("color", "#000") },
        href: { default: text("href", "https://www.google.com/") },
        target: { default: text("target", "_blank") }
    },
    template: `
    <Theme>
        <PrimaryLinkButton :width="width" :href="href" :target="target" :color="color" @click="action">ボタン</PrimaryLinkButton>
    </Theme>
    `
});

export const SecondaryLink = () => ({
    components: { SecondaryLinkButton, Theme },
    methods: { action: action('click') },
    props: {
        width: { default: text("width", "150px") },
        color: { default: color("color", "#000") },
        href: { default: text("href", "https://www.google.com/") },
        target: { default: text("target", "_blank") }
    },
    template: `
    <Theme>
    <SecondaryLinkButton :width="width" :href="href" :target="target" :color="color" @click="action">ボタン</SecondaryLinkButton>
    </Theme>
    `
});
