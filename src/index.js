import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./App";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
// ReactDOM.render(<App/>,document.getElementById("root"));

root.render(<App />);