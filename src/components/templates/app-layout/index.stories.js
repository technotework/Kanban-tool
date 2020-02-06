import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator"
import AppLayout from "./index";

let description = 'import AppLayout from "@/components/templates/base-layout/"';
export default createDefStory("templates/AppLayout", AppLayout, description);


//---------------------
//Basic
let setting = {
    name: "AppLayout",
    compos: {
        AppLayout: AppLayout
    },
    props: {},
    action: {},
    template: tagTemp `<AppLayout>
    <template #header>header</template>
    <template #main>main</template>
</AppLayout>`
};

export const Basic = () => (createStory(setting));