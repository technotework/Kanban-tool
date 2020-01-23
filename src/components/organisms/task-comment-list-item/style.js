
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const TaskCommentListItem = styled.div``;
    
    const TaskCommentListItemComponent = Vue.component("task-comment-list-item-component",{
    components: {Theme, TaskCommentListItem},
    template: `<Theme><TaskCommentListItem><slot/></TaskCommentListItem></Theme>`
    });

    export default TaskCommentListItemComponent;