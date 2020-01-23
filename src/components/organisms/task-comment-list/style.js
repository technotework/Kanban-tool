
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const TaskCommentList = styled.div``;
    
    const TaskCommentListComponent = Vue.component("task-comment-list-component",{
    components: {Theme, TaskCommentList},
    template: `<Theme><TaskCommentList><slot/></TaskCommentList></Theme>`
    });

    export default TaskCommentListComponent;