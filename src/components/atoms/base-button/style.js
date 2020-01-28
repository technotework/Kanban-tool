import styled from "vue-styled-components";

const StyledBaseButton = styled.input`
    
    font-size: ${props => props.theme.service.button.fontSize};
    line-height:${props => props.theme.service.button.lineHeight};
    padding:${props => props.theme.service.button.padding};
    margin:${props => props.theme.service.button.margin};
    border-radius: ${props => props.theme.service.button.radius};
    border: ${props => props.theme.service.button.border};
    background-color: ${props => props.theme.service.color.secondary};
    cursor: pointer;
`;

export default StyledBaseButton;