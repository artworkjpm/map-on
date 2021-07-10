import React from "react";
import "./datepicker.scss";

export default function DatePicker() {
	return (
		<div className="date-wrapper">
			<div>
				<label>Period</label>
			</div>

			<div>
				<label>From</label>
				<input type="date" id="date" name="date"></input>
			</div>
			<div>
				<label>To</label>
				<input type="date" id="date" name="date"></input>
			</div>
		</div>
	);
}
