
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import HolyGrailLayout from "./index";

let description = 'import HolyGrailLayout from "@/components/templates/holy-grail-layout/"';
export default createDefStory("templates/HolyGrailLayout", HolyGrailLayout, description);

export const Basic = () => ({
    components: { HolyGrailLayout },
    props: {
       
    },
    template: `
        <HolyGrailLayout>
            <template #header>header</template>
            <template #main>main</template>
        </HolyGrailLayout>
    `
});