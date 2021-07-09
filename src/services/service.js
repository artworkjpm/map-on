import axios from "axios";

const url = "https://mapon.com/api/";

export function getCars() {
	axios
		.get(`${url}`)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => console.error(`Error: ${err}`));
}
