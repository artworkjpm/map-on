import React, { useEffect } from "react";
import Select from "../Select/Select";
import "./window.scss";

import { getCars, carsList } from "../../services/service";

export default function Window() {
	useEffect(() => {
		getCars();
		console.log(carsList);
	}, []);

	return (
		<div className="window-wrapper">
			<h1>Route Report</h1>
			<Select title="Vehicle number" />
		</div>
	);
}
