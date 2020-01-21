
import { storiesOf } from '@storybook/vue'
import SearchTaskListPage from './index.vue'

storiesOf('SearchTaskListPage', module)
    .add('default', () => ({
        components: { SearchTaskListPage },
        template: `<SearchTaskListPage  />`
    }))