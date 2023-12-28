import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RecoilRoot } from 'recoil';

// Apply global styles
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <style>
      {`
        body, html {
          margin: 0;
          padding: 0;
          height: 100%;
        }
      `}
    </style>
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>
  </>,
);
