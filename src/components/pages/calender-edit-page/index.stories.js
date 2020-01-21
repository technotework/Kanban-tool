
import { storiesOf } from '@storybook/vue'
import CalenderEditPage from './index.vue'

storiesOf('CalenderEditPage', module)
    .add('default', () => ({
        components: { CalenderEditPage },
        template: `<CalenderEditPage  />`
    }));