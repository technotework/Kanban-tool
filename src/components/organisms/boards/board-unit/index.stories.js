import {
    action, object
} from "@/components/utils/story-export"
import {
    createDefStory,
} from "@/components/utils/story-creator"
import BoardUnit from "./index.vue";

let description = 'import BoardUnit from "@/components/organisms/boards/board-unit/"'
export default createDefStory("organisms/boards/BoardUnit", BoardUnit, description);



//---------------------
//Basic
export const Basic = () => ({
    components: {
        BoardUnit
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
        action: action('click'),
        change: action('input')
    },
    template: `<BoardUnit v-bind="{boardList}" v-model.lazy="text" @input="change" @click="action" />`
});