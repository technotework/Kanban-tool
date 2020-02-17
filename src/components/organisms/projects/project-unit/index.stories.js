import {
    action, object
} from "@/components/utils/story-export"
import {
    createDefStory,
} from "@/components/utils/story-creator"
import ProjectUnit from "./index.vue";

let description = 'import ProjectUnit from "@/components/organisms/projects/project-unit/"'
export default createDefStory("organisms/projects/ProjectUnit", ProjectUnit, description);


//---------------------
//Basic
export const Basic = () => ({
    components: {
        ProjectUnit
    },
    props: {
        items: {
            default: object("items", [
                {
                    project: {
                        id: "p1",
                        label: "MyProject1",
                        update_date: "1560000000"
                    }
                },
                {
                    project: {
                        id: "p2",
                        label: "MyProject2",
                        update_date: "1560000000"
                    }
                }
            ])
        }
    },
    methods: {
        action: action('click'),
        change: action('edited-project-name'),
    },
    template: `<ProjectUnit v-model="items" @click="action" @edited-project-name="change">
    <template #first>aa</template>
    <template #second>aaa</template>
    </ProjectUnit>`
});