import { useEffect, useState } from "react";

export function useFetch(url, defaultResponse) {
	const [data, setData] = useState(defaultResponse);

	async function getDataFromAPI(url) {
		try {
			const res = await fetch(url);
			if (res.ok) {
				const data = await res.json();
				setData({
					data,
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

	useEffect(() => {
		setTimeout(() => {
			if (url) {
				getDataFromAPI(url);
			}
		}, 3000);
	}, [url]);

	return data;
}
