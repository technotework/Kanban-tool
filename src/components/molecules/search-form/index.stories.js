
import { storiesOf } from '@storybook/vue'
import SearchForm from './index.vue'

storiesOf('SearchForm', module)
    .add('default', () => ({
        components: { SearchForm },
        template: `<SearchForm  />`
    }));