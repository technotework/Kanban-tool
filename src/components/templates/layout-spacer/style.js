
import styled from "vue-styled-components"

//コンポーネントスタイル

const p = {
    width: String,
    padding: String,
    margin: String
};

const LayoutSpacer = styled("div", p)`
    width:${props => props.width ? props.width : "0"};
    padding:${props => props.padding ? props.padding : "0"};
    margin:${props => props.margin ? props.margin : "0"};
`;

export default LayoutSpacer;