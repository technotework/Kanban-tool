
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル
    const p = {
        src:   String,
        round: String,
        width: String,
        height:String
    }

    const BaseIcon = styled("div",p)`
        width: ${props => props.width ? props.width : props.theme.size.t4l4};
        height: ${props => props.height ? props.height : props.theme.size.t4l4};
        background-color: ${props => props.theme.color.glay};
        overflow: hidden;
        background-size: cover;
        border-radius: ${props => props.round ? props.round : 0};
        background-repeat: no-repaet;
        background-image: url(${props => props.src ? props.src : ""});
        background-position: center center;
    `;
    
    const BaseIconComponent = Vue.component("base-icon-component",{
    components: {Theme, BaseIcon},
    props:{
        src:   String,
        round: String,
        width: String,
        height:String
    },
    template: `<Theme><BaseIcon :width="width" :height="height" :src="src" :round="round"><slot/></BaseIcon></Theme>`
    });

    export default BaseIconComponent;