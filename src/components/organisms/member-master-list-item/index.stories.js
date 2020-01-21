
import { storiesOf } from '@storybook/vue'
import MemberMasterListItem from './index.vue'

storiesOf('MemberMasterListItem', module)
    .add('default', () => ({
        components: { MemberMasterListItem },
        template: `<MemberMasterListItem  />`
    }))