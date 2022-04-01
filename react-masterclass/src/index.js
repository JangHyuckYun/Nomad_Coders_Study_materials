import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from "styled-components";

const darkTheme = {
    textColor: "whitesmoke",
    backgroundColor:"#111"
};

const lightTheme = {
    textColor: "#111",
    backgroundColor:"whitesmoke"
}

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

