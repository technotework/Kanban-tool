
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル
    const p = {
        width: String,
        height:String,
        padding:String
    }
    const BaseInput = styled("input",p)`
        padding: ${props => props.padding ? props.padding : props.theme.space.th};
        width:   ${props => props.width ? props.width : "auto"};
        height:  ${props => props.height ? props.height : "auto"};
    `;
    
    const BaseInputComponent = Vue.component("base-input-component",{
    components: {Theme, BaseInput},
    props: {
        width:      {type:String},
        height:     {type:String},
        padding:    {type:String}, 
        value:      {type:String},
        name:       {type:String},
        maxlength:  {type:String},
        placeholder:{type:String},
        required:   {type:Boolean,default:false}
    },
    methods:{
        onInput(e){
            
            this.$emit("input", e.target.value);
        }
    },
    template: `<Theme><BaseInput :width="width" :height="height" :padding="padding" :value="value" :name="name" :maxlength="maxlength" :placeholder="placeholder" :required="required" @input="onInput" /></Theme>`
    });

    export default BaseInputComponent;