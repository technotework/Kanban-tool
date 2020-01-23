
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const TaskLabelListItem = styled.div``;
    
    const TaskLabelListItemComponent = Vue.component("task-label-list-item-component",{
    components: {Theme, TaskLabelListItem},
    template: `<Theme><TaskLabelListItem><slot/></TaskLabelListItem></Theme>`
    });

    export default TaskLabelListItemComponent;