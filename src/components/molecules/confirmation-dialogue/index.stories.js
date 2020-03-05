import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import ConfirmationDialogue from "./index.vue";
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"

let description = 'import ConfirmationDialogue from "@/components/molecules/confirmation-dialogue/"';
export default createDefStory("molecules/ConfirmationDialogue", ConfirmationDialogue, description);


export const Basic = () => ({
    components: { ConfirmationDialogue },
    data: () => {
        return {
            p: () => { alert("p"); },
            s: () => { alert("s"); }
        }
    },
    template: `<ConfirmationDialogue 
    :pCallback="p" :sCallback="s" text="メッセージ"
    @clickPrimary="alert('primary')"
    @clickSecondary="alert('Secondary')" />`,
    methods: { primary: action('clickPrimary'), secondary: action('clickSecondary') }
});
