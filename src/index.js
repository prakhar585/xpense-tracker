import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SnackbarProvider, useSnackbar } from 'notistack'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SnackbarProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </SnackbarProvider>
);

