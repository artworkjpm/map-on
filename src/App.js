import { useState, useEffect, useCallback } from "react";
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
	const [hasClicked, setHasClicked] = useState(false);

	const handleGetRoute = useCallback(() => {
		getRoute(from, to, selectedCar)
			.then((res) => {
				console.log(res.data.data.units[0].routes);
				let a = res.data.data.units[0].routes;
				let b = [];
				a.filter((item) => item.type === "stop").forEach((element) => {
					b.push({ lat: element.start.lat, lng: element.start.lng });
				});

				console.log(b);
				setRoutes(b);
			})
			.catch((err) => console.error(`Error: ${err}`));
	}, [from, to, selectedCar]);

	useEffect(() => {
		hasClicked && handleGetRoute();
	}, [selectedCar, handleGetRoute, hasClicked]);

	return (
		<CarContext.Provider value={{ carList, setCarList, setFrom, setTo, selectedCar, setSelectedCar, routes, setRoutes, center, setCenter }}>
			<div className="main-wrapper">
				<img src="/images/mapon-colour.svg" alt="" />
				<Window />
				{hasClicked && <GoogleMaps />}

				<Button handleClick={(handleGetRoute, () => setHasClicked(true))} disabled={!from || !to} title="GENERATE" />
			</div>
		</CarContext.Provider>
	);
}

export default App;
