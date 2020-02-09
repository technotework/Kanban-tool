import {
    action,
    object,
} from "@/components/utils/story-export"
import {
    createDefStory,
} from "@/components/utils/story-creator"
import ProjectTaskList from "./index.vue";


let description = 'import ProjectTaskList from "@/components/organisms/boards/project-task-list/"'
export default createDefStory("organisms/boards/ProjectTaskList", ProjectTaskList, description);

//---------------------
//Basic
export const Basic = () => ({
    components: {
        ProjectTaskList
    },
    props: {
        taskList: {
            default: object("taskList", [{
                    id: "t1",
                    data: "todo:あいうえおあいうえお"
                },
                {
                    id: "t2",
                    data: "todo:あいうえおあいうえお"
                },
                {
                    id: "t3",
                    data: "todo:あいうえおあいうえお"
                },
                {
                    id: "t4",
                    data: "todo:あいうえおあいうえお"
                },
                {
                    id: "t5",
                    data: "todo:あいうえおあいうえお"
                },
                {
                    id: "t6",
                    data: "todo:あいうえおあいうえお"
                },
                {
                    id: "t7",
                    data: "todo:あいうえおあいうえお"
                },
                {
                    id: "t8",
                    data: "todo:あいうえおあいうえお"
                },
                {
                    id: "t9",
                    data: "todo:あいうえおあいうえお"
                },
                {
                    id: "t10",
                    data: "todo:あいうえおあいうえお"
                }
            ])
        }
    },
    template: `<ProjectTaskList v-bind="{taskList}" />`,
    methods: {}
});