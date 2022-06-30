import { createApp, h } from 'vue'
import App from './App.vue'
import router from '@/router'

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createApolloProvider } from '@vue/apollo-option'

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

app.use(router)
app.use(apolloProvider)
app.mount('#app')