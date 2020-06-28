import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<Router basename={process.env.PUBLIC_URL}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Router>,
	document.getElementById("root")
);

serviceWorker.unregister();
