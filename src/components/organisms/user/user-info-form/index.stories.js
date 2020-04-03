import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import { action } from "@/components/utils/story-export";

import UserInfoForm from "./index";

const description =
    'import UserInfoForm from "@/components/organisms/user/user-info-form/"';
export default createDefStory(
    "organisms/user/UserInfoForm",
    UserInfoForm,
    description
);

//---------------------
//Basic

export const Basic = () => ({
    components: {
        UserInfoForm
    },
    template: `<UserInfoForm  />`,
    methods: {}
});
