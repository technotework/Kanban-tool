import styled from "vue-styled-components";

const p = {
    color: String,
    width: String,
    height: String
}
const StyledBaseColorChip = styled("div", p)`
    width: ${props => props.width ? props.width : props.theme.base.size.t2l2};
    height: ${props => props.height ? props.height : props.theme.base.size.t2l2};
    background-color: ${props => props.color ? props.color : props.theme.base.color.red};
`;

export default StyledBaseColorChip;