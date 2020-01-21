
import { storiesOf } from '@storybook/vue'
import LoginPage from './index.vue'

storiesOf('LoginPage', module)
    .add('default', () => ({
        components: { LoginPage },
        template: `<LoginPage  />`
    }))