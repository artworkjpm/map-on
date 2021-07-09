import React from "react";
import "./input.scss";

export default function Input() {
	function handleChange(event) {}

	return (
		<div className="input-wrapper">
			<label>Vehicle number*</label>
			<select onChange={handleChange}>
				<option value="grapefruit">Grapefruit</option>
			</select>
		</div>
	);
}
