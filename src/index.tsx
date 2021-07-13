import React from "react";
import { render } from "react-dom";
import Shop from "./components/Shop";

function App() {
    return <Shop />;
}

render(<App />, document.querySelector("#root"));
