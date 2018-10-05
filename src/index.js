import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { PrismicLink } from 'apollo-link-prismic';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
    link: PrismicLink({
        uri: 'https://top5.prismic.io/graphql',
        access_token: 'MC5XNmtKbXhFQUFCOEFkZ0pq.Qe-_ve-_ve-_vWNDe0BI77-977-977-977-9Y3fvv71977-9d0oue--_ve-_vV_vv73vv73vv70A77-9Wu-_vQ'
    }),
    cache: new InMemoryCache(),
    fetchOptions: { mode: 'no-cors'}
});

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
      <AppComponent />
  </ApolloProvider>
);

ReactDOM.render(ApolloApp(App), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
