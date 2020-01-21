
import { storiesOf } from '@storybook/vue'
import ManagePlanPage from './index.vue'

storiesOf('ManagePlanPage', module)
    .add('default', () => ({
        components: { ManagePlanPage },
        template: `<ManagePlanPage  />`
    }));