
import styled from "vue-styled-components";

//コンポーネントスタイル

const p = {
    index: Number,
    backgroundColor: String
};

const BaseModalCover = styled("div", p)`
    position: fixed;
    width:100vw;
    height:100vh;
    background-color:${props => props.backgroundColor ? props.backgroundColor : "transparent"};
    z-index:${props => props.index ? props.index : props.theme.base.index.subHeigh};
`;


export default BaseModalCover;