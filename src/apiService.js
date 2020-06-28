import { useEffect, useState } from "react";

async function fetchContacts(url, setData) {
	try {
		const res = await fetch(url);
		if (res.ok) {
			const payload = await res.json();
			setData({
				data: payload,
			});
		} else {
			alert("Using mock data!");
		}
		setData({
			isLoading: false,
		});
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
		}, 1);
	}, [url]);

	return data;
}

export function usePostContact(url, defaultResponse) {
	const [data, setData] = useState(defaultResponse);

	useEffect(() => {
		setTimeout(() => {
			if (url) {
				fetchContacts(url, setData);
			}
		}, 3000);
	}, [url]);

	return data;
}
