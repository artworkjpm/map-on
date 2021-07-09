import React from "react";
import "./select.scss";

export default function Select(props) {
	const { title } = props;

	function handleChange(event) {}

	return (
		<div className="select-wrapper">
			<label>{title}*</label>
			<select onChange={handleChange}>
				<option value="grapefruit">Grapefruit</option>
			</select>
		</div>
	);
}
