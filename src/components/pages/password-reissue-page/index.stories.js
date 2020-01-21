
import { storiesOf } from '@storybook/vue'
import PasswordReissuePage from './index.vue'

storiesOf('PasswordReissuePage', module)
    .add('default', () => ({
        components: { PasswordReissuePage },
        template: `<PasswordReissuePage  />`
    }))