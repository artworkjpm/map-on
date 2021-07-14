import React, { useContext, useEffect } from "react";
import { CarContext } from "../../context/CarContext";
import "./select.scss";

export default function Select(props) {
	const { title, data } = props;
	const { setSelectedCar } = useContext(CarContext);

	useEffect(() => {
		if (data) {
			setSelectedCar(data[0].unit_id);
		}
	}, [data, setSelectedCar]);

	function handleChange(event) {
		setSelectedCar(event.target.value);
	}

	return (
		<div className="select-wrapper">
			<label>
				{title}
				<span>*</span>
			</label>
			<select onChange={handleChange}>
				{data &&
					data.map((item) => {
						return (
							<option key={item.unit_id} value={item.unit_id}>
								{item.number}
							</option>
						);
					})}
			</select>
		</div>
	);
}
