
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import { BaseLayout } from "./compose";

export default {
    title: "templates/HolyGrailLayout",
    component: { BaseLayout },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseLayout, Theme },
    template: `
    <Theme>
        <BaseLayout>
        <template #header>header</template>
        <template #main>main</template>
        <template #footer>footer</template>
        </BaseLayout>
    </Theme>`
});