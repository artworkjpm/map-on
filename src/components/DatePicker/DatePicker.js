import React from "react";
import "./datepicker.scss";

export default function DatePicker() {
	function handleChange(event) {
		console.log(event.target.value);
	}
	return (
		<div className="date-wrapper">
			<div>
				<label>Period</label>
			</div>

			<div>
				<label>From</label>
				<input type="date" id="from" name="from" onChange={handleChange} />
			</div>
			<div>
				<label>To</label>
				<input type="date" id="to" name="to" onChange={handleChange}></input>
			</div>
		</div>
	);
}
