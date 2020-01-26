
import styled from "vue-styled-components";

//コンポーネントスタイル

const p = {
    width: String,
    height: String,
    index: Number,
    top: String,
    left: String,
};

const BaseModelessContainer = styled("div", p)`
    position: absolute;
    top: ${props => props.top ? props.top : 0};
    left: ${props => props.left ? props.left : 0};
    width:${props => props.width ? props.width : props.theme.size.s150};
    height:${props => props.height ? props.height : "auto"};
    z-index:${props => props.index ? props.index : props.theme.index.middle};
    background-color: ${props => props.theme.color.white};
    border:  ${props => props.theme.border.thin} ${props => props.theme.color.glay};
`;


export default BaseModelessContainer;