import React from "react";
import { useLocation } from "react-router-dom";
import image from "./404.gif";
import "./NoMatch.css";

function NoMatch() {
	let location = useLocation();

	return (
		<div className="contents pm-0">
			<a href={process.env.PUBLIC_URL + "/"}>
				<img
					className="img-width"
					alt={`No match for ${location.pathname}`}
					src={image}
				/>
			</a>
		</div>
	);
}

export default NoMatch;
