import {
    action,
    withKnobs,
    text,
    color,
    number,
    array,
    object,
    boolean,
    withInfo
} from "@/components/utils/story-export"
import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator"
import ProjectList from "./index.vue";


let description = 'import ProjectList from "@/components/organisms/projects/project-list/"'
export default createDefStory("organisms/projects/ProjectList", ProjectList, description);


//---------------------
//Basic
export const Basic = () => ({
    components: {
        ProjectList
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
    template: `<ProjectList :items="items"  />`,
    methods: {
        action: action('change')
    }
});