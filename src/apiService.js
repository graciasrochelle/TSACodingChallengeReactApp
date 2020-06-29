import { useEffect, useState } from "react";
import { mockData } from "./mockData";

async function fetchContacts(setData) {
	try {
		const res = await fetch(`${process.env.REACT_APP_ALLCONTACT_ENDPOINT}`);
		if (res.ok) {
			const payload = await res.json();
			setData({
				data: payload,
				isLoading: false,
				isError: false,
			});
		} else {
			alert("Using mock data!");
			setData({
				isLoading: false,
				data: mockData,
				isError: false,
			});
		}
	} catch (e) {
		console.error(e);
	}
}

export function useFetchContacts(defaultResponse) {
	const [data, setData] = useState(defaultResponse);

	useEffect(() => {
		setTimeout(() => {
			fetchContacts(setData);
		}, 1000);
	}, [data]);

	return data;
}

export const addContact = async (reqt) => {
	try {
		let isSuccess = false;
		const res = fetch(`${process.env.REACT_APP_ADDCONTACT_ENDPOINT}`, {
			method: "POST",
			headers: {
				contentType: "application/json; charset=utf-8",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers":
					"Origin, X-Requested-With, Content-Type, Accept",
			},
			body: JSON.stringify(reqt),
		})
			.then((res) => res.json())
			.then(() => (res.ok ? (isSuccess = true) : (isSuccess = false)));
		return isSuccess;
	} catch (e) {
		console.error(e);
	}
};
