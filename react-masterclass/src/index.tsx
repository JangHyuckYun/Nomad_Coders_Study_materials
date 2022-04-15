import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from "styled-components";
import {darkTheme, lightTheme} from "./theme";

ReactDOM.render(
    <React.StrictMode>
            <ThemeProvider theme={lightTheme}>
                <App />
            </ThemeProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

