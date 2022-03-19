import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AppHomePage } from './domain/app/pages';

ReactDOM.render(
  <React.StrictMode>
    <AppHomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
