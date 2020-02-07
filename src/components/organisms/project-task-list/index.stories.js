import {
    action,
    object,
} from "@/components/utils/story-export"
import {
    createDefStory,
} from "@/components/utils/story-creator"
import ProjectTaskList from "./index.vue";


let description = 'import ProjectTaskList from "@/components/organisms/project-task-list/"'
export default createDefStory("organisms/ProjectTaskList", ProjectTaskList, description);

//---------------------
//Basic
export const Basic = () => ({
    components: {
        ProjectTaskList
    },
    props: {
        items: {
            default: object("items", [{
                    id: "t1",
                    title: "todo:あいうえおあいうえお"
                },
                {
                    id: "t2",
                    title: "todo:あいうえおあいうえお"
                },
                {
                    id: "t3",
                    title: "todo:あいうえおあいうえお"
                },
                {
                    id: "t4",
                    title: "todo:あいうえおあいうえお"
                },
                {
                    id: "t5",
                    title: "todo:あいうえおあいうえお"
                },
                {
                    id: "t6",
                    title: "todo:あいうえおあいうえお"
                },
                {
                    id: "t7",
                    title: "todo:あいうえおあいうえお"
                },
                {
                    id: "t8",
                    title: "todo:あいうえおあいうえお"
                },
                {
                    id: "t9",
                    title: "todo:あいうえおあいうえお"
                },
                {
                    id: "t10",
                    title: "todo:あいうえおあいうえお"
                }
            ])
        }
    },
    template: `<ProjectTaskList :items="items" />`,
    methods: {
        action: action('click-task-edit')
    }
});