import axios from "axios";

const url = "https://mapon.com/api/v1/";
const apikey = "ed6dc5516f66531096e66628e84d10fd2371c87a";
export let carsList;

export function getCars() {
	axios
		.get(`${url}unit/list.json?key=${apikey}`)
		.then((res) => {
			console.log(res.data.data.units);
			carsList = res.data.data.units;
		})
		.catch((err) => console.error(`Error: ${err}`));
}
