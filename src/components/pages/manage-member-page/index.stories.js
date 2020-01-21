
import { storiesOf } from '@storybook/vue'
import ManageMemberPage from './index.vue'

storiesOf('ManageMemberPage', module)
    .add('default', () => ({
        components: { ManageMemberPage },
        template: `<ManageMemberPage  />`
    }))