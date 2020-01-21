
import { storiesOf } from '@storybook/vue'
import RegistForm from './index.vue'

storiesOf('RegistForm', module)
    .add('default', () => ({
        components: { RegistForm },
        template: `<RegistForm  />`
    }));