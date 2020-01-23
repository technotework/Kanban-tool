import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"

    //コンポーネントスタイル

    const Button = styled.input`
      color: ${props => props.theme.color.black};
      `;
    
    const ButtonComponent = Vue.component("button-component",{
        components: {Theme,Button},
        props: {
          value: {
              type:String,
              default:"Button"
              },
          name: {type:String},
        },
        methods:{
          onClick(e){
  
              this.$emit("click",e);
          }
        },
        template: `<Theme><Button type="button" :value="value" :name="name" @click="onClick" /></Theme>` 
    });

    export default ButtonComponent;