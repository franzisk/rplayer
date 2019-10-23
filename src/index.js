import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Player from "./Player";
import * as serviceWorker from "./serviceWorker";

// This is for IE9 and IE11
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";

ReactDOM.render(<Player />, document.getElementById("root"));

serviceWorker.unregister();
