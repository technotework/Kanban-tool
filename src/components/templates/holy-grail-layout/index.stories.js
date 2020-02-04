
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import HolyGrailLayout from "./index";

let description = 'import HolyGrailLayout from "@/components/templates/holy-grail-layout/"';
export default createDefStory("templates/HolyGrailLayout", HolyGrailLayout, description);

export const Basic = () => ({
    components: { HolyGrailLayout },
    props: {
        size: {
            default: object("size", {
                hW: "100vw",
                hH: "50px",
                mW: "100vw",
                mH: "calc(100vh - 100px)",
                fW: "100vw",
                fH: "50px"
            })
        }
    },
    template: `
        <HolyGrailLayout :size="size">
            <template #header>header</template>
            <template #main>main</template>
            <template #footer>footer</template>
        </HolyGrailLayout>
    `
});