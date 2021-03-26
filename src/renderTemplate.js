import React from "react";
import App from "./pages/App.js";
import ReactDOMServer from 'react-dom/server';

window.renderTemplate = (data, alias) => {
    return ReactDOMServer.renderToString(<App data={{data, alias}}/>);
};
