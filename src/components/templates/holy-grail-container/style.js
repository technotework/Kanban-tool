import styled from "vue-styled-components"

const p = {
    width: String,
    height: String
};

const HolyGrailContainer = styled("div", p)`
    display:flex;
    position:relative;
    width:${props => props.width ? props.width : "auto"};
    height:${props => props.height ? props.height : "auto"};
`;

export default HolyGrailContainer;