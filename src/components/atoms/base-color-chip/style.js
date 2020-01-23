
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル
    const p = {
        hoge: String,
        color: String
    }

    const ColorChip = styled("div",p)`
        width: ${props => props.theme.size.t2l2};
        height: ${props => props.theme.size.t2l2};
        background-color: ${props => props.color ? props.color : props.theme.color.red};
    `;
    
    const ColorChipComponent = Vue.component("color-chip-component",{
    components: {Theme, ColorChip},
    props:{
        color:{type:String}
    },
    template: `<Theme><ColorChip :color="color" /></Theme>`
    });

    export default ColorChipComponent;