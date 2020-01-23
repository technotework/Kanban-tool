
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BaseEditableText = styled.div`
    width: ${props => props.theme.size.vw};
    height:${props => props.theme.size.t5l5};
    border:${props => props.theme.border.thin} ${props => props.theme.color.black};
    padding:${props => props.theme.space.l}
    `;
    
    const BaseEditableTextComponent = Vue.component("base-editable-text-component",{
    components: {Theme, BaseEditableText},
    props: {
        width:{type:String},
        height:{type:String}
    },
    template: `<Theme><BaseEditableText :width="width" :height="height"  contenteditable="true"><slot/></BaseEditableText></Theme>`
    });

    export default BaseEditableTextComponent;