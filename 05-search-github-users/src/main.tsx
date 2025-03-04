import './index.css';
import { createRoot } from 'react-dom/client';
import { Toaster } from './components/ui/toaster.tsx';
import { ApolloProvider } from '@apollo/client';
import App from './App.tsx';
import client from './apolloClient.ts';

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
    <Toaster />
  </ApolloProvider>
);