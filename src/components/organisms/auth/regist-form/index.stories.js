import { createDefStory } from "@/components/utils/story-creator";
import { action } from "@/components/utils/story-export";

import RegistForm from "./index";

const description =
    'import RegistForm from "@/components/organisms/auth/regist-form/"';
export default createDefStory(
    "organisms/auth/RegistForm",
    RegistForm,
    description
);

//---------------------
//Basic

export const Basic = () => ({
    components: {
        RegistForm
    },
    template: `<RegistForm @regist-event="action" />`,
    methods: {
        action: action("regist-event")
    }
});
