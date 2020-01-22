import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"

    //コンポーネントスタイル

    const Button = styled.div`
      color: ${props => props.theme.color.glay};
      `;
    
    const ButtonComponent = Vue.component("button-component",{
        components: {Theme,Button},
        template: `<Theme><Button><slot/></Button></Theme>` 
    });

    export default ButtonComponent;