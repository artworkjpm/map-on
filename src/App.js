import { useState } from "react";
import "./App.scss";
import Window from "./components/Window/Window";
import { CarContext } from "./context/CarContext";

function App() {
	const [carList, setCarList] = useState();

	return (
		<CarContext.Provider value={{ setCarList }}>
			<div className="main-wrapper">
				<img src="/images/mapon-colour.svg" alt="" />
				<div className="window">
					<Window carList={carList} />
				</div>
			</div>
		</CarContext.Provider>
	);
}

export default App;
