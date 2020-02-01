import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
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
    components: { ConfirmationDialogue },
    props: {
        pval: { default: text("pval", "OK") },
        sval: { default: text("sval", "キャンセル") }
    },
    template: `<ConfirmationDialogue :pval="pval" :sval="sval" @clickPrimary="p"  @clickSecondary="s">
    メッセージ
    </ConfirmationDialogue>`,
    methods: { p: action('clickPrimary'), s: action('clickSecondary') }
});

export const Confirm = () => ({
    components: { ConfirmDialogue },
    template: `<ConfirmDialogue @clickPrimary="p" @clickSecondary="s">
    メッセージ
    </ConfirmDialogue>`,
    methods: { p: action('clickPrimary'), s: action('clickSecondary') }
});


export const Save = () => ({
    components: { SaveDialogue },
    template: `<SaveDialogue @clickPrimary="p" @clickSecondary="s">
    メッセージ
    </SaveDialogue>`,
    methods: { p: action('clickPrimary'), s: action('clickSecondary') }
});