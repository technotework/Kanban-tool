
import { storiesOf } from '@storybook/vue'
import ManageMemberList from './index.vue'

storiesOf('ManageMemberList', module)
    .add('default', () => ({
        components: { ManageMemberList },
        template: `<ManageMemberList  />`
    }))