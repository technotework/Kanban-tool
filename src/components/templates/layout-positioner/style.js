import styled from "vue-styled-components";

const p = {
    position: String,
    width: String,
    top: String,
    bottom: String,
    left: String,
    right: String
}

const LayoutPositioner = styled("div", p)`
    position:${prop => prop.position ? prop.position : "absolute"};
    top:${prop => prop.top ? prop.top : "auto"};
    left:${prop => prop.left ? prop.left : "auto"};
    right:${prop => prop.right ? prop.right : "auto"};
    bottom:${prop => prop.bottom ? prop.bottom : "auto"};
    width:${prop => prop.width ? prop.width : "auto"};
`;

export default LayoutPositioner;