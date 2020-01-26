import styled from "vue-styled-components";

const StyledBaseButton = styled.input`
    color: ${props => props.theme.color.black};
    border-radius: ${props => props.theme.border.radius};
    border: ${props => props.theme.border.thin} ${props => props.theme.color.glay};
    background-color: ${props => props.theme.color.white};
    padding-top:${props => props.theme.space.thh};
    padding-bottom:${props => props.theme.space.thh};
    padding-left:${props => props.theme.space.th};
    padding-right:${props => props.theme.space.th};
    cursor: pointer;
`;

export default StyledBaseButton;