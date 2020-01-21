
import { storiesOf } from '@storybook/vue'
import MemberMasterList from './index.vue'

storiesOf('MemberMasterList', module)
    .add('default', () => ({
        components: { MemberMasterList },
        template: `<MemberMasterList  />`
    }));