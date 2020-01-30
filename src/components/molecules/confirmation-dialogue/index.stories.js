import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import ConfirmationDialogue from "./index.vue";
import { ConfirmDialogue, SaveDialogue } from "./compose";

export default {
    title: "molecules/ConfirmationDialogue",
    component: { ConfirmationDialogue },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ConfirmationDialogue, Theme },
    props: {
        pval: { default: text("pval", "OK") },
        sval: { default: text("sval", "キャンセル") }
    },
    template: `<Theme><ConfirmationDialogue :pval="pval" :sval="sval" @clickPrimary="p"  @clickSecondary="s">
    メッセージ
    </ConfirmationDialogue></Theme>`,
    methods: { p: action('clickPrimary'), s: action('clickSecondary') }
});

export const Confirm = () => ({
    components: { ConfirmDialogue, Theme },
    template: `<Theme><ConfirmDialogue @clickPrimary="p" @clickSecondary="s">
    メッセージ
    </ConfirmDialogue></Theme>`,
    methods: { p: action('clickPrimary'), s: action('clickSecondary') }
});


export const Save = () => ({
    components: { SaveDialogue, Theme },
    template: `<Theme><SaveDialogue @clickPrimary="p" @clickSecondary="s">
    メッセージ
    </SaveDialogue></Theme>`,
    methods: { p: action('clickPrimary'), s: action('clickSecondary') }
});