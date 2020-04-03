import { createDefStory } from "@/components/utils/story-creator";
import ConfirmationDialogue from "./index.vue";
import { action } from "@/components/utils/story-export";

const description =
    'import ConfirmationDialogue from "@/components/molecules/confirmation-dialogue/"';

export default createDefStory(
    "molecules/ConfirmationDialogue",
    ConfirmationDialogue,
    description
);

export const Basic = () => ({
    components: { ConfirmationDialogue },
    data: () => {
        return {
            p: () => {
                alert("p");
            },
            s: () => {
                alert("s");
            }
        };
    },
    template: `<ConfirmationDialogue 
    :pCallback="p" :sCallback="s" text="メッセージ"
    @clickPrimary="alert('primary')"
    @clickSecondary="alert('Secondary')" />`,
    methods: {
        primary: action("clickPrimary"),
        secondary: action("clickSecondary")
    }
});
