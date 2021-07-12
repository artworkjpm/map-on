import { useState, useCallback } from "react";
import "./App.scss";
import Window from "./components/Window/Window";
import Button from "./components/Button/Button";
import { CarContext } from "./context/CarContext";
import { getRoute } from "./services/service";

function App() {
	const [carList, setCarList] = useState();
	const [from, setFrom] = useState();
	const [to, setTo] = useState();

	function handleGetRoute() {
		getRoute(from, to)
			.then((res) => {
				console.log(from);
				console.log(res);
			})
			.catch((err) => console.error(`Error: ${err}`));
	}

	return (
		<CarContext.Provider value={{ carList, setCarList, setFrom, setTo }}>
			<div className="main-wrapper">
				<img src="/images/mapon-colour.svg" alt="" />
				<Window />
				<Button handleClick={handleGetRoute} disabled={!from || !to} title="GENERATE" />
			</div>
		</CarContext.Provider>
	);
}

export default App;
