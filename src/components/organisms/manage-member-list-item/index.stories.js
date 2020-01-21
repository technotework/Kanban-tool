
import { storiesOf } from '@storybook/vue'
import ManageMemberListItem from './index.vue'

storiesOf('ManageMemberListItem', module)
    .add('default', () => ({
        components: { ManageMemberListItem },
        template: `<ManageMemberListItem  />`
    }))