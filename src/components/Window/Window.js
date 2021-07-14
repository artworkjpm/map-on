import React, { useContext, useEffect } from "react";
import { CarContext } from "../../context/CarContext";
import { getCars } from "../../services/service";
import DatePicker from "../DatePicker/DatePicker";
import Select from "../Select/Select";
import "./window.scss";

export default function Window() {
	const { carList, setCarList } = useContext(CarContext);

	useEffect(() => {
		getCars()
			.then((res) => {
				console.log(res.data.data.units);
				setCarList(res.data.data.units);
			})
			.catch((err) => console.error(`Error: ${err}`));
	}, [setCarList]);

	return (
		<div className="window-wrapper">
			<h1>Route Report</h1>
			<Select title="Vehicle number" data={carList} />
			<DatePicker />
		</div>
	);
}
