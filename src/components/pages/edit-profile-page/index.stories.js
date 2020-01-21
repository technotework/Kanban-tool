
import { storiesOf } from '@storybook/vue'
import EditProfilePage from './index.vue'

storiesOf('EditProfilePage', module)
    .add('default', () => ({
        components: { EditProfilePage },
        template: `<EditProfilePage  />`
    }))