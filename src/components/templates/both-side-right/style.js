import styled from "vue-styled-components"


const p = {
    width: String,
    right: String
}

const BothSideRight = styled.div`
    position:absolute;
    right:${prop => prop.right ? prop.right : 0};
    width:${prop => prop.width ? prop.width : "auto"};
`;

export default BothSideRight;