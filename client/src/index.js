import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';


ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>,
  document.querySelector("#root")
);
