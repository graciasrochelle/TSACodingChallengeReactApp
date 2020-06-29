import React from "react";
import { Alert } from "react-bootstrap";

function ErrorPage() {
	return (
		<Alert key={"error-alert"} variant="danger" className="align-contents">
			<h1>Something is not woking right. Please try again soon.</h1>
		</Alert>
	);
}

export default ErrorPage;
