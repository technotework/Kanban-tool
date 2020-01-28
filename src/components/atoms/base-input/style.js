import styled from "vue-styled-components";

const p = {
    width: String,
    height: String,
    padding: String
}

const StyledBaseInput = styled("input", p)`
    padding: ${props => props.padding ? props.padding : props.theme.base.space.th};
    width:   ${props => props.width ? props.width : "auto"};
    height:  ${props => props.height ? props.height : "auto"};
`;

export default StyledBaseInput