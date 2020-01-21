
import { storiesOf } from '@storybook/vue'
import MemberMasterPage from './index.vue'

storiesOf('MemberMasterPage', module)
    .add('default', () => ({
        components: { MemberMasterPage },
        template: `<MemberMasterPage  />`
    }))