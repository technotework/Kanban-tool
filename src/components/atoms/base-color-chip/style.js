import styled from "vue-styled-components";

const p = {
    color: String
}
const StyledBaseColorChip = styled("div",p)`
    width: ${props => props.theme.size.t2l2};
    height: ${props => props.theme.size.t2l2};
    background-color: ${props => props.color ? props.color : props.theme.color.red};
`;

export default StyledBaseColorChip;