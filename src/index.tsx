import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RootProvider from './providers/root.provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RootProvider>
      <App />
    </RootProvider>
  </React.StrictMode>
);

