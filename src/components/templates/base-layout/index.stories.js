import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator"
import BaseLayout from "./index";

let description = 'import BaseLayout from "@/components/templates/base-layout/"';
export default createDefStory("templates/BaseLayout", BaseLayout, description);


//---------------------
//Basic
let setting = {
    name: "BaseLayout",
    compos: {
        BaseLayout: BaseLayout
    },
    props: {},
    action: {},
    template: tagTemp `<BaseLayout>
    <template #header>header</template>
    <template #main>main</template>
</BaseLayout>`
};

export const Basic = () => (createStory(setting));