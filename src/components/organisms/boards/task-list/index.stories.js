import {
    action,
    object,
} from "@/components/utils/story-export"
import {
    createDefStory,
} from "@/components/utils/story-creator"
import TaskList from "./index.vue";


let description = 'import TaskList from "@/components/organisms/boards/task-list/"'
export default createDefStory("organisms/boards/TaskList", TaskList, description);

//---------------------
//Basic
export const Basic = () => ({
    components: {
        TaskList
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
    template: `<TaskList v-bind="{taskList}" />`,
    methods: {}
});