import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { Toaster } from './components/ui/toaster.tsx';
import './index.css';
import App from './App.tsx';
import client from './apolloClient.ts';

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
    <Toaster />
  </ApolloProvider>
);