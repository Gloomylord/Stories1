import React from "react";
import App from "./pages/App.js";
import ReactDOMServer from 'react-dom/server';

window.renderTemplate = (alias, data) => {
    return ReactDOMServer.renderToString(<App data={{alias, data}}/>);
};
