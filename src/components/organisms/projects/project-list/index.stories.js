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
    template: `<ProjectList :items.sync="items" />`,
    methods: {
        action: action('change')
    }
});