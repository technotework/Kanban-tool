import {
    action, object
} from "@/components/utils/story-export"
import {
    createDefStory,
} from "@/components/utils/story-creator"
import ProjectBoardUnit from "./index.vue";

let description = 'import ProjectBoardUnit from "@/components/organisms/boards/project-board-unit/"'
export default createDefStory("organisms/boards/ProjectBoardUnit", ProjectBoardUnit, description);


//---------------------
//Basic
export const Basic = () => ({
    components: {
        ProjectBoardUnit
    },
    props: {
        boardList: {
            default: object("boardList", [

                {
                    id: "b1",
                    title: "backlog",
                    taskList: [{
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
                    }
                    ]
                },
                {
                    id: "b2",
                    title: "todo",
                    taskList: [{
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
                    }
                    ]
                },
                {
                    id: "b3",
                    title: "debug",
                    taskList: [{
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
                    }
                    ]
                },

            ])
        }
    },
    methods: {
        action: action('click')
    },
    template: `<ProjectBoardUnit v-bind="{boardList}" @click="action" />`
});