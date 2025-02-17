import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import React from 'react'

import { MantineProvider } from '@mantine/core';
import { theme } from './style/theme';
import App from './App';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
  </React.StrictMode>
);

