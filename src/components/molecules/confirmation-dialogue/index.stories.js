import { createDefStory, createStory } from "@/components/utils/story-creator"
import ConfirmationDialogue from "./index.vue";
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"

export default createDefStory("molecules/ConfirmationDialogue", ConfirmationDialogue);


export const Basic = () => ({
    components: { ConfirmationDialogue },
    props: {
    },
    template: `<ConfirmationDialogue @clickPrimary="primary"  @clickSecondary="secondary">
    メッセージ
    </ConfirmationDialogue>`,
    methods: { primary: action('clickPrimary'), secondary: action('clickSecondary') }
});
