import { createApp, h} from 'vue';
import App from './App.vue';
import router from '@/router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createApolloProvider } from '@vue/apollo-option';
import NavBar from '@/components/NavBar';
import TagBadge from '@/components/TagBadge';
import marked from 'marked';


const cache = new InMemoryCache()

const httpLink = createHttpLink({
    uri: 'http://localhost:8000/graphql'
})

const apolloClient = new ApolloClient({
  cache,
  link: httpLink,
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

const app = createApp({
  render: () => h(App),
})


app.component('NavBar', NavBar)
app.component('TagBadge', TagBadge)
app.use(router)
app.use(apolloProvider)
app.use(marked)
app.mount('#app')
