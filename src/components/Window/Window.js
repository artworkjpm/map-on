import React, { useContext, useEffect } from "react";
import { CarContext } from "../../context/CarContext";
import { getCars } from "../../services/service";
import Select from "../Select/Select";
import "./window.scss";

export default function Window(props) {
	const { setCarList } = useContext(CarContext);
	const { carList } = props;

	useEffect(() => {
		getCars()
			.then((res) => {
				setCarList(res.data.data.units);
			})
			.catch((err) => console.error(`Error: ${err}`));
	}, [setCarList]);

	return (
		<div className="window-wrapper">
			<h1>Route Report</h1>
			<Select title="Vehicle number" data={carList} />
		</div>
	);
}
