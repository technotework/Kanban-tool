import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator"
import {
    action
} from "@/components/utils/story-export"

import LoginForm from "./index"

let description = 'import LoginForm from "@/components/organisms/login-form/"';
export default createDefStory("organisms/LoginForm", LoginForm, description);


//---------------------
//Basic

export const Basic = () => ({
    components: {
        LoginForm
    },
    template: `<LoginForm @login-event="action" />`,
    methods: {
        action: action('login-event')
    }
});


