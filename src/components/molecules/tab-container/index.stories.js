import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import TabContainer from "./index.vue";

const description =
    'import TabContainer from "@/components/molecules/tab-container/"';
export default createDefStory(
    "molecules/TabContainer",
    TabContainer,
    description
);

//---------------------
//Basic
const setting = {
    name: "TabContainer",
    compos: { TabContainer: TabContainer },
    props: {},
    action: {},
    template: tagTemp`<TabContainer ${"props"} ${"action"}>
        <template #tab1>tab1</template>
        <template #tab2>tab2</template>
        <template #first>firstContent</template>
        <template #second>secondContent</template>
    </TabContainer>`
};

export const Basic = () => createStory(setting);
