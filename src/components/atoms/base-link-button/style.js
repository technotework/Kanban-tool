import styled from "vue-styled-components";
const p = {
    mode: String,
    color: String,
    width: String
}
const StyledBaseLinkButton = styled("a", p)`

    display:  block;
    overflow: hidden;
    cursor: pointer;
    font-size: ${props => props.theme.service.button.fontSize};
    line-height:${props => props.theme.service.button.lineHeight};
    padding:${props => props.theme.service.button.padding};
    margin:${props => props.theme.service.button.margin};
    border-radius: ${props => props.theme.service.button.radius};
    border: ${props => props.theme.service.button.border};
    cursor: pointer;
    text-align:center;
    text-decoration: none;
    
    width:${props => props.width ? props.width : "auto"};
    color:${props => props.color ? props.color : props.theme.service.baseText.color};
    a:hover,a:link,a:active,a:focus{
        color:${props => props.color ? props.color : props.theme.service.baseText.color};
    }
`;

export default StyledBaseLinkButton;