import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator"
import {
    action
} from "@/components/utils/story-export"

import AuthUnit from "./index"

let description = 'import AuthUnit from "@/components/organisms/auth-unit/"';
export default createDefStory("organisms/AuthUnit", AuthUnit, description);


//---------------------
//Basic

export const Basic = () => ({
    components: {
        AuthUnit
    },
    template: `<AuthUnit @login-event="action" />`,
    methods: {
        action: action('login-event')
    }
});


