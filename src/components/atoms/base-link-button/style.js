import styled from "vue-styled-components";
const p = {
    mode: String,
    width: String,
    height: String,
    padding: String,
    color: String,
    backgroundColor: String,
    round: String,
}
const StyledBaseLinkButton = styled("a", p)`

    display:  block;
    overflow: hidden;
    cursor: pointer;
    padding:  ${props => props.padding ? props.padding : props.theme.base.space.th};
    width:    ${props => props.width ? props.width : "auto"};
    height:   ${props => props.height ? props.height : "auto"};
    border-radius: ${props => props.round ? props.round : 0};
    background-color:${props => props.backgroundColor ? props.backgroundColor : props.theme.base.color.glay};
    text-align:center;
    text-decoration: none;
    color:${props => props.color ? props.color : props.theme.base.color.black};
    a:hover,a:link,a:active,a:focus{
        color:${props => props.color ? props.color : props.theme.base.color.black};
    }
`;

export default StyledBaseLinkButton;