import { action, object } from "@/components/utils/story-export";
import { createDefStory } from "@/components/utils/story-creator";
import TaskList from "./index.vue";

const description =
    'import TaskList from "@/components/organisms/boards/task-list/"';
export default createDefStory(
    "organisms/boards/TaskList",
    TaskList,
    description
);

//---------------------
//Basic
export const Basic = () => ({
    components: {
        TaskList
    },
    props: {
        taskList: {
            default: object("taskList", [
                {
                    task: {
                        id: "t1",
                        data: "あいうえおあいうえお",
                        members: ["a", "b"]
                    }
                },
                {
                    task: {
                        id: "t2",
                        data: "かきくけこかきくけこ",
                        members: ["a", "b"]
                    }
                },
                {
                    task: {
                        id: "t3",
                        data: "さしすせそさしすせそ",
                        members: ["a", "b"]
                    }
                }
            ])
        },
        isOpen: false,
        dataBoardId: "abc"
    },
    template: `<TaskList v-model="taskList"
    :open.sync="isOpen"
    :data-board-id="id"
    @save-event="onSave"
    @form-add="onCreate"
    @delete-event="onDelete"
    @drag-sort-list="onDragSortList"
    @drag-add-list="onDragAddList" />`,
    methods: {
        onSave: action("save-event"),
        onCreate: action("form-add"),
        onDelete: action("delete-event"),
        onDragSortList: action("drag-sort-list"),
        onDragAddList: action("drag-add-list")
    }
});
