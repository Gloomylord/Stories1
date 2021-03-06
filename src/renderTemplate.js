import React from "react";
import App from "./pages/App.js";
import ReactDOMServer from 'react-dom/server';

window.renderTemplate = function (alias, data) {
    return ReactDOMServer.renderToString(<App data={{alias, data}}/>);
};
