import { action } from "@/components/utils/story-export";
import { createDefStory } from "@/components/utils/story-creator";
import TaskListItem from "./index.vue";

const description =
    'import TaskListItem from "@/components/organisms/boards/task-list-item/"';
export default createDefStory(
    "organisms/boards/TaskListItem",
    TaskListItem,
    description
);

//---------------------
//Basic

export const Basic = () => ({
    components: {
        TaskListItem
    },
    data: function() {
        return {
            dataBoardId: "boardId",
            item: {
                task: {
                    id: "t1",
                    data: "あいうえおあいうえお",
                    members: ["a", "b"]
                }
            }
        };
    },
    template: `<TaskListItem 
    :id="item.task.id"
    :board-id="dataBoardId"
    :content="item.task.data"
    v-model="item.task.members"
    @save-event="onSave"
    @delete-event="onDelete" />`,
    methods: {
        onSave: action("save-event"),
        onDelete: action("delete-event")
    }
});
