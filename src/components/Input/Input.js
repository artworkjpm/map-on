import React, { useEffect } from "react";
import { getCars } from "../../services/service";
import "./input.scss";

export default function Input() {
	useEffect(() => {
		getCars();
	}, []);

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
