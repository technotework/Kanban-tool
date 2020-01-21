
import { storiesOf } from '@storybook/vue'
import LoginForm from './index.vue'

storiesOf('LoginForm', module)
    .add('default', () => ({
        components: { LoginForm },
        template: `<LoginForm  />`
    }))