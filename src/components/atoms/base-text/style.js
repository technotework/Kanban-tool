
import styled from "vue-styled-components";

//コンポーネントスタイル

const p = {
    padding: String,
    backgroundColor: String,
    color: String,
    width: String,
    minWidth: String
};

const BaseText = styled("div", p)`

    display:block;
    width: ${props => props.width ? props.width : "auto"};
    min-width: ${props => props.minWidth ? props.minWidth : "auto"};
    padding: ${props => props.padding ? props.padding : "0px"};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : props.theme.base.color.white};
    color: ${props => props.color ? props.color : props.theme.base.color.black};
`;

export default BaseText;