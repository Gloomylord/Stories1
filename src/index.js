import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App.js";
import ReactDOMServer from 'react-dom/server';
import data from './data/data.json';

window.renderTemplate = () => {
    return ReactDOMServer.renderToString(<App data={data[8]}/>);
};

function getUrlVars() {
    const vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

const value = getUrlVars().slide - 1;
const index = value < 11 && value >= 0 ? value : 0;

const theme =  getUrlVars().theme;
if (theme === "dark" || theme === "light") document.body.classList.add(theme);

ReactDOM.render(<App data={data[index]}/>, document.getElementById("root"));
