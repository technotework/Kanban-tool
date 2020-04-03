import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import ContentAreaLayout from "./index";

const description =
    'import ContentAreaLayout from "@/components/templates/content-area-layout/"';
export default createDefStory(
    "templates/ContentAreaLayout",
    ContentAreaLayout,
    description
);

//---------------------
//Basic
const setting = {
    name: "ContentAreaLayout",
    compos: {
        ContentAreaLayout: ContentAreaLayout
    },
    props: {},
    action: {},
    template: tagTemp`<ContentAreaLayout>
    <template #nav>nav</template>
    <template #article>article</template>
</ContentAreaLayout>`
};

export const Basic = () => createStory(setting);
