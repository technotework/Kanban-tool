
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル
    const p = {
        mode:String,
        width: String,
        height:String,
        padding:String,
        color:String,
        backgroundColor:String,
        round:String,
    }
    const BaseLinkButton = styled("a",p)`
    
        display:  block;
        overflow: hidden;
        cursor: pointer;
        padding:  ${props => props.padding ? props.padding : props.theme.space.th};
        width:    ${props => props.width ? props.width : "auto"};
        height:   ${props => props.height ? props.height : "auto"};
        border-radius: ${props => props.round ? props.round : 0};
        background-color:${props => props.backgroundColor ? props.backgroundColor : props.theme.color.glay};
        text-align:center;
        text-decoration: none;
        color:${props => props.color ? props.color : props.theme.color.black};
        a:hover,a:link,a:active,a:focus{
            color:${props => props.color ? props.color : props.theme.color.black};
        }
    `;

    const BaseLinkButtonComponent = Vue.component("base-link-button-component",{
    components: {Theme, BaseLinkButton},
    props: {
        mode: {
            type:String,
            default:"button"
        },
        href:String,
        target:String,
        width: String,
        height:String,
        padding:String,
        backgroundColor:String,
        round:String
      },
      methods:{
        onClick(e){

            if(this.mode=="button"){

                this.$emit("click");    
                e.preventDefault();
            }
        }
      },
    template: `<Theme><BaseLinkButton :mode="mode" :href="href" :target="target" :width="width" :height="height" :padding="padding" :backgroundColor="backgroundColor" :round="round" @click="onClick"><slot/></BaseLinkButton></Theme>`
    });

    export default BaseLinkButtonComponent;