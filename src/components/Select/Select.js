import React from "react";
import "./select.scss";

export default function Select(props) {
	const { title, data } = props;
	if (data) {
		console.log(data);
	}

	function handleChange(event) {}

	return (
		<div className="select-wrapper">
			<label>{title}*</label>
			<select onChange={handleChange}>
				{data &&
					data.map((item) => {
						return (
							<option key={item.unit_id} value={item.number}>
								{item.number}
							</option>
						);
					})}
			</select>
		</div>
	);
}
