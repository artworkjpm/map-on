import React, { useEffect, useContext } from "react";
import { CarContext } from "../../context/CarContext";

export default function GoogleMaps() {
	const { routes, center } = useContext(CarContext);

	function setup() {
		const map = new window.google.maps.Map(document.getElementById("map"), {
			zoom: 10,
			center: center,
			mapTypeId: "terrain",
			disableDefaultUI: true,
		});

		const start = new window.google.maps.Marker({
			position: { lat: -27.467, lng: 153.027 },
			map,
		});

		const end = new window.google.maps.Marker({
			position: { lat: 37.772, lng: -122.214 },
			map,
		});

		start.setMap(map);
		end.setMap(map);

		console.log(routes);

		const carPath = new window.google.maps.Polyline({
			path: routes,
			geodesic: true,
			strokeColor: "#FF0000",
			strokeOpacity: 1.0,
			strokeWeight: 2,
		});

		carPath.setMap(map);
	}

	useEffect(() => {
		routes && setup();
	}, [routes]);

	return <div className="gmaps" id="map" />;
}
