import axios from "axios";

const url = "https://mapon.com/api/v1/";
const apikey = "ed6dc5516f66531096e66628e84d10fd2371c87a";

export function getCars() {
	return axios.get(`${url}unit/list.json?key=${apikey}`);
}
