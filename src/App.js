import "./App.scss";
import Window from "./components/Window/Window";

function App() {
	return (
		<div className="main-wrapper">
			<img src="/images/mapon-colour.svg" alt="" />
			<div className="window">
				<Window />
			</div>
		</div>
	);
}

export default App;
