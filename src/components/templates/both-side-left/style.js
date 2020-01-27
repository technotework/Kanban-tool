import styled from "vue-styled-components";

const p = {
    width: String,
    left: String
}

const BothSideLeft = styled("div", p)`
    position:absolute;
    left:${prop => prop.left ? prop.left : 0};
    width:${prop => prop.width ? prop.width : "auto"};
`;

export default BothSideLeft;