
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル
    const p = {
        
        round: String,
        width: String,
        height:String
    }

    const BaseImage = styled("img",p)`
        width: ${props => props.width ? props.width : "auto"};
        height: ${props => props.height ? props.height : "auto"};
        border-radius: ${props => props.round ? props.round : 0};
    `;
    
    
    const BaseImageComponent = Vue.component("base-image-component",{
    components: {Theme, BaseImage},
    props:{
        src:   String,
        round: String,
        width: String,
        height:String,
        alt:String
    },
    template: `<Theme><BaseImage :src="src" :round="round" :width="width" :height="height" :alt="alt" /></Theme>`
    });

    export default BaseImageComponent;