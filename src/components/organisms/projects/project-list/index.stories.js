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
} from "@/components/utils/story-export";
import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import ProjectList from "./index.vue";

const description =
    'import ProjectList from "@/components/organisms/projects/project-list/"';
export default createDefStory(
    "organisms/projects/ProjectList",
    ProjectList,
    description
);

//---------------------
//Basic
export const Basic = () => ({
    components: {
        ProjectList
    },
    data: () => {
        return {
            items: [
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
            ]
        };
    },
    template: `<ProjectList
    v-model="items"
    @context-menu-click="onMenuClick"
    @edited-project-name="onInput"
    @drag-sort-list="onDragSortList"
  />`,
    methods: {
        onMenuClick: action("context-menu-click"),
        onInput: action("edited-project-name"),
        onDragSortList: action("drag-sort-list")
    }
});
