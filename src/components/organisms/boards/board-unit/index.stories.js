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
                    "board": {
                        "id": "a",
                        "label": "Backlog",
                        "order": 100
                    }
                },
                {
                    "board": {
                        "id": "b",
                        "label": "Todo",
                        "order": 200
                    }
                },
                {
                    "board": {
                        "id": "c",
                        "label": "Complete",
                        "order": 300
                    }
                },
            ])
        },

    },
    methods: {
        action: action('click'),
        change: action('input')
    },
    template: `<BoardUnit v-bind="{boardList}" v-model.lazy="text" @input="change" @click="action" />`
});