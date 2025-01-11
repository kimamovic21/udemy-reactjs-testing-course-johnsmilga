import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FlowProvider } from './FlowContext.tsx';
// import App from './App.tsx';
import AppWithContext from './AppWithContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <FlowProvider>
      <AppWithContext />
    </FlowProvider>
  </StrictMode>
);