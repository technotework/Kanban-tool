import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import BaseButton from "@/components/atoms/base-button/"
import { PrimaryButton, SaveButton, SecondaryButton } from "./compose"

export default {
    title: "atoms/BaseButton",
    component: { BaseButton },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

/**
 * Basic
 */
export const Basic = () => ({
    components: { BaseButton },
    props: {
        value: { default: text("value", "ButtonName") },
        compose: { default: text("compose", "") }
    },
    template: `<BaseButton :value="value" :compose="compose" @click="action" />`,
    parameters: {
        info: {},
    },
    methods: { action: action('click') }
});

/**
 * Primary
 */
export const Primary = () => ({
    components: { PrimaryButton },
    props: {
        name: { default: text("name", "button") },
    },
    template: `<PrimaryButton :name="name" @click="action" />`,
    parameters: {
        info: {},
    },
    methods: { action: action('click') }
});

/**
 * Save
 */
export const Save = () => ({
    components: { SaveButton },
    props: {
        name: { default: text("name", "button") },
    },
    template: `<SaveButton :name="name" @click="action" />`,
    parameters: {
        info: {},
    },
    methods: { action: action('click') }
});

/**
 * Secondary
 */
export const Secondary = () => ({
    components: { SecondaryButton },
    props: {
        name: { default: text("name", "button") },
    },
    template: `<SecondaryButton :name="name" @click="action" />`,
    parameters: {
        info: {},
    },
    methods: { action: action('click') }
});