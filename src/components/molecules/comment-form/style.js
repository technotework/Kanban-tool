
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const CommentForm = styled.div``;
    
    const CommentFormComponent = Vue.component("comment-form-component",{
    components: {Theme, CommentForm},
    template: `<Theme><CommentForm><slot/></CommentForm></Theme>`
    });

    export default CommentFormComponent;