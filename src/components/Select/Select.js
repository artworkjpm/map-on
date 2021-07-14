import React, { useContext, useEffect } from "react";
import { CarContext } from "../../context/CarContext";
import "./select.scss";

export default function Select(props) {
	const { title, data } = props;
	const { setSelectedCar, setCenter } = useContext(CarContext);

	useEffect(() => {
		if (data) {
			console.log(data[0].unit_id);
			setSelectedCar(data[0].unit_id);
			setCenter({ lat: data[0].lat, lng: data[0].lng });
		}
	}, [data, setSelectedCar, setCenter]);

	function handleChange(event) {
		console.log(event.target.value);
		setSelectedCar(event.target.value);
		const newCenter = data.filter((item) => item.unit_id === Number(event.target.value));
		setCenter({ lat: newCenter[0].lat, lng: newCenter[0].lng });
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
