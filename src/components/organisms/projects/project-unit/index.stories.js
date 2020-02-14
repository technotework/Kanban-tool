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
            default: object("items", [{
                id: "p1",
                name: "MyProject1",
                date: "1560000000"
            },
            {
                id: "p2",
                name: "MyProject2",
                date: "1560000000"
            },
            {
                id: "p3",
                name: "MyProject3",
                date: "1560000000"
            },
            {
                id: "p4",
                name: "MyProject4",
                date: "1560000000"
            },
            {
                id: "p5",
                name: "MyProject5",
                date: "1560000000"
            },
            {
                id: "p6",
                name: "MyProject6",
                date: "1560000000"
            },
            {
                id: "p7",
                name: "MyProject7",
                date: "1560000000"
            },
            {
                id: "p8",
                name: "MyProject8",
                date: "1560000000"
            },
            {
                id: "p9",
                name: "MyProject9",
                date: "1560000000"
            },
            {
                id: "p10",
                name: "MyProject10",
                date: "1560000000"
            }
            ])
        }
    },
    methods: {
        action: action('click')
    },
    template: `<ProjectUnit v-bind="{items}" @click="action" />`
});