
import { storiesOf } from '@storybook/vue'
import RegistPage from './index.vue'

storiesOf('RegistPage', module)
    .add('default', () => ({
        components: { RegistPage },
        template: `<RegistPage  />`
    }));