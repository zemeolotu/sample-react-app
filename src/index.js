import ReactDOM from "react-dom";
import React from "react"

const App = () => <h1>Hello World</h1>

const render = () => {
    const root = document.createElement("div");
    document.body.appendChild(root);
    ReactDOM.render(<App></App>, root)
}

window.addEventListener("load", render)