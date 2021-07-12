import { useState } from "react";
import "./App.scss";
import Window from "./components/Window/Window";
import Button from "./components/Button/Button";
import { CarContext } from "./context/CarContext";
import { getRoute } from "./services/service";

function App() {
	const [carList, setCarList] = useState();

	function handleGetRoute() {
		const from = new Date("20-JUN-2021").toISOString().replace(/.\d+Z$/g, "Z");
		const till = new Date("21-JUN-2021").toISOString().replace(/.\d+Z$/g, "Z");

		getRoute(from, till)
			.then((res) => {
				console.log(from);
				console.log(res);
			})
			.catch((err) => console.error(`Error: ${err}`));
	}

	return (
		<CarContext.Provider value={{ carList, setCarList }}>
			<div className="main-wrapper">
				<img src="/images/mapon-colour.svg" alt="" />
				<Window />
				<Button handleGetRoute={handleGetRoute} />
			</div>
		</CarContext.Provider>
	);
}

export default App;
