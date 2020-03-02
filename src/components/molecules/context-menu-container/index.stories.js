import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";

import {
    text
} from "@/components/utils/story-export"
import ContextMenuContainer from "./index.vue";

let description = 'import ContextMenuContainer from "@/components/molecules/context-menu-container/"';
export default createDefStory("molecules/ContextMenuContainer", ContextMenuContainer, description);


//---------------------
//Basic

export const Basic = () => ({
    components: {
        ContextMenuContainer
    },
    props: {
    },
    template: `<ContextMenuContainer>
    <template #button>button</template>
    <template #menu>menu</template>
    </ContextMenuContainer>`
});