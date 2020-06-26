import React from "react";
import loading from "./loading.gif";

function Loader() {
	return (
		<div className="col-9 mx-auto col-md-6 col-lg-3 my-3 align-self-center ">
			<img alt="loading..." src={loading} />
		</div>
	);
}

export default Loader;
