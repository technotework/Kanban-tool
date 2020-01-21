import { injectGlobal } from "vue-styled-components";
import "./reset-css";
import props from "./props";


const global =  injectGlobal`

html{
    font-size: ${props.fontSize.base};
    
}
body{
    font-size: ${props.fontSize.medium};
    line-height: ${props.lineHeight.medium};
}
`;

export default global;