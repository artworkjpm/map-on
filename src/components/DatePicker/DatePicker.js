import React, { useContext } from "react";
import { CarContext } from "../../context/CarContext";
import "./datepicker.scss";

export default function DatePicker() {
	const { setFrom, setTo } = useContext(CarContext);

	function handleFrom(event) {
		setFrom(event.target.value);
	}
	function handleTo(event) {
		setTo(event.target.value);
	}
	return (
		<div className="date-wrapper">
			<div>
				<label>Period</label>
			</div>

			<div>
				<label>From</label>
				<input type="date" id="from" name="from" onChange={handleFrom} />
			</div>
			<div>
				<label>To</label>
				<input type="date" id="to" name="to" onChange={handleTo}></input>
			</div>
		</div>
	);
}
