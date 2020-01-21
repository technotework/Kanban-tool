import {ThemeProvider} from "vue-styled-components"
import media from "./media-template"
import props from "./props"


const Theme = ({children}) => (<ThemeProvider theme="{props}">{children}</ThemeProvider>);

export default Theme;
export {media};