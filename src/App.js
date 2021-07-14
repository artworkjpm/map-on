import { useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import GoogleMaps from "./components/Map/Map";
import Window from "./components/Window/Window";
import { CarContext } from "./context/CarContext";
import { getRoute } from "./services/service";

function App() {
	const [carList, setCarList] = useState();
	const [center, setCenter] = useState();
	const [selectedCar, setSelectedCar] = useState();
	const [from, setFrom] = useState();
	const [to, setTo] = useState();
	const [routes, setRoutes] = useState();

	function handleGetRoute() {
		console.log(selectedCar);
		getRoute(from, to, selectedCar)
			.then((res) => {
				console.log(res.data.data.units[0].routes);
				setRoutes(res.data.data.units[0].routes);
			})
			.catch((err) => console.error(`Error: ${err}`));
	}

	return (
		<CarContext.Provider value={{ carList, setCarList, setFrom, setTo, selectedCar, setSelectedCar, routes, setRoutes, center, setCenter }}>
			<div className="main-wrapper">
				<img src="/images/mapon-colour.svg" alt="" />
				<Window />
				{center && <GoogleMaps />}

				<Button handleClick={handleGetRoute} disabled={!from || !to} title="GENERATE" />
			</div>
		</CarContext.Provider>
	);
}

export default App;
