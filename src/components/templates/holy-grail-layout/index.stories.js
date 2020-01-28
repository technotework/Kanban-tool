
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import { BaseLayout } from "./compose";

export default {
    title: "templates/HolyGrailLayout",
    component: { BaseLayout }
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