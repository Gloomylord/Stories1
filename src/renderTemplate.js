import React from "react";
import App from "./pages/App.js";
import ReactDOMServer from 'react-dom/server';
import data from "./data/data";

window.renderTemplate = () => {
    return ReactDOMServer.renderToString(<App data={data}/>);
};
