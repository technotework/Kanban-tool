
import styled from "vue-styled-components";

const p = {
    wrap: String,
    width: String,
    height: String
}

const FlexLayout = styled("div", p)`
        display:flex;
        width:  ${props => { props.width ? props.width : props.theme.size.s300 }};
        height: ${props => { props.height ? props.height : "auto" }};
        flex-wrap:   ${props => { props.wrap ? props.wrap : "wrap" }};
    `;

export default FlexLayout;