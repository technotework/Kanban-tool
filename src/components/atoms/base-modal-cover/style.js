
import styled from "vue-styled-components";

//コンポーネントスタイル

const p = {
    index: Number
};

const BaseModalCover = styled("div", p)`
    position: fixed;
    width:100vw;
    height:100vh;
    z-index:${props => props.index ? props.index : props.theme.index.subHeigh};
`;


export default BaseModalCover;