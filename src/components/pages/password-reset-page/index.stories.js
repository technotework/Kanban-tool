
import { storiesOf } from '@storybook/vue'
import PasswordResetPage from './index.vue'

storiesOf('PasswordResetPage', module)
    .add('default', () => ({
        components: { PasswordResetPage },
        template: `<PasswordResetPage  />`
    }));