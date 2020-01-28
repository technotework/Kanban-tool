
import  { global, action, Theme, styled, withKnobs, text, color, number, withInfo }  from "@/components/themes/story-export"
import BaseLinkButton from "./index.vue";

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
    template: `
    <div>
    <Theme>
        <BaseLinkButton width="120px" height="30px" round="20px" padding="8px" href="https://www.google.com" mode="button" backgroundColor="#ccc" @click="action">ボタン</BaseLinkButton>
        <BaseLinkButton width="120px" height="30px" round="20px" padding="8px" href="https://www.google.com" mode="link" backgroundColor="#ff0" target="_blank">リンク</BaseLinkButton>
    </Theme>
    </div>
    `
});