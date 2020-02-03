
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import { createDefStory, createStory } from "@/components/utils/story-creator"
import HolyGrailLayout from "./index";

export default createDefStory("templates/HolyGrailLayout", HolyGrailLayout);

export const Basic = () => ({
    components: { HolyGrailLayout },
    props: {
        size: {
            default: object("size", {
                headerWidth: "100vw",
                headerHeight: "50px",
                mainWidth: "100vw",
                mainHeight: "calc(100vh - 100px)",
                footerWidth: "100vw",
                footerHeight: "50px"
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