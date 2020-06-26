import React from "react";
import "./ContactList.css";
import Loader from "../Loader/Loader";
import * as apiService from "../../apiService";
import { mockData } from "./mockData";
import ContactTable from "./ContactTable";

function ContactList(props) {
	let fetchResponse;
	if (props.apiEndpoint) {
		fetchResponse = apiService.useFetch(props.apiEndpoint, {
			isLoading: true,
			data: null,
		});
	}

	if (fetchResponse && fetchResponse.isLoading && !fetchResponse.data) {
		return <Loader />;
	}

	const contactList =
		fetchResponse && fetchResponse.data && !fetchResponse.isLoading
			? fetchResponse.data
			: mockData;

	return !fetchResponse.isLoading && <ContactTable data={contactList} />;
}

export default ContactList;
