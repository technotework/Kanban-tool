import styled from "vue-styled-components";

const p = {
    round: String,
    width: String,
    height:String
}
const StyledBaseImage = styled("img",p)`
        width: ${props => props.width ? props.width : "auto"};
        height: ${props => props.height ? props.height : "auto"};
        border-radius: ${props => props.round ? props.round : 0};
`;

export default StyledBaseImage