
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
    background-color:${props => props.backgroundColor ? props.backgroundColor : "rgba(0,0,0,0.25)"};
    z-index:${props => props.index ? props.index : props.theme.base.index.subHeigh};
`;


export default BaseModalCover;