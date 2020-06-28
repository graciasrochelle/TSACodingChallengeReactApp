import { useEffect, useState } from "react";
import { mockData } from "./mockData";

async function fetchContacts(url, setData) {
	try {
		const res = await fetch(url);
		if (res.ok) {
			const payload = await res.json();
			setData({
				data: payload,
				isLoading: false,
			});
		} else {
			alert("Using mock data!");
			setData({
				isLoading: false,
				data: mockData,
			});
		}
	} catch (e) {
		console.error(e);
	}
}

export function useFetchContacts(url, defaultResponse) {
	const [data, setData] = useState(defaultResponse);

	useEffect(() => {
		setTimeout(() => {
			if (url) {
				fetchContacts(url, setData);
			}
		}, 1000);
	}, [url]);

	return data;
}

export const addContact = async (endpoint = `/contact`, reqt) => {
	const controller = new AbortController();
	const signal = controller.signal;
	setTimeout(() => {
		controller.abort();
	}, 1000);
	try {
		let isSuccess = false;
		const res = fetch(
			endpoint,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(reqt),
			},
			{ signal }
		)
			.then((res) => res.json())
			.then(() => (res.ok ? (isSuccess = true) : (isSuccess = false)));
		return isSuccess;
	} catch (e) {
		console.error(e);
	}
};
