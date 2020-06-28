import React from "react";
import "./ContactList.css";
import Loader from "../Loader/Loader";
import * as apiService from "../../apiService";
import ContactTable from "./ContactTable";

function ContactList(props) {
	let fetchResponse;
	if (props.apiEndpoint) {
		fetchResponse = apiService.useFetchContacts(props.apiEndpoint, {
			isLoading: true,
			data: null,
		});
	}

	if (fetchResponse && fetchResponse.isLoading) {
		return <Loader />;
	}

	return (
		fetchResponse &&
		fetchResponse.data &&
		!fetchResponse.isLoading && <ContactTable data={fetchResponse.data} />
	);
}

export default ContactList;
