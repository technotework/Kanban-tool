
import styled from "vue-styled-components";

const p = {
    justify: String,
    wrap: String,
    width: String,
    height: String
}

const FlexLayout = styled("div", p)`
    display:flex;
    width: ${props => props.width ? props.width : props.theme.base.size.s300};
    height: ${props => props.height ? props.height : "auto"};
    flex-wrap: ${props => props.wrap ? props.wrap : "wrap"};
    justify-content: ${props => props.justify ? props.justify : "flex-start"};
`;

export default FlexLayout;