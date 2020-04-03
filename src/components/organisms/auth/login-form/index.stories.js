import { createDefStory } from "@/components/utils/story-creator";
import { action } from "@/components/utils/story-export";

import LoginForm from "./index";

const description =
    'import LoginForm from "@/components/organisms/auth/login-form/"';
export default createDefStory(
    "organisms/auth/LoginForm",
    LoginForm,
    description
);

//---------------------
//Basic

export const Basic = () => ({
    components: {
        LoginForm
    },
    template: `<LoginForm @login-event="action" />`,
    methods: {
        action: action("login-event")
    }
});
