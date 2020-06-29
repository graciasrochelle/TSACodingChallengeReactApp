import React from "react";
import "./ContactList.css";
import Loader from "../Loader/Loader";
import * as apiService from "../../apiService";
import ContactTable from "./ContactTable";
import ErrorPage from "../ErrorPage";

function ContactList() {
	let fetchResponse;

	fetchResponse = apiService.useFetchContacts({
		isLoading: true,
		isError: false,
		data: null,
	});

	if (fetchResponse && !fetchResponse.data && fetchResponse.isLoading) {
		return <Loader />;
	}

	if (fetchResponse && fetchResponse.isError && !fetchResponse.data) {
		return <ErrorPage />;
	}

	return (
		fetchResponse &&
		!fetchResponse.isLoading &&
		!fetchResponse.isError &&
		fetchResponse.data && <ContactTable data={fetchResponse.data} />
	);
}

export default ContactList;
