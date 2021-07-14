import React, { useEffect, useContext, useCallback } from "react";
import { CarContext } from "../../context/CarContext";

export default function GoogleMaps() {
	const { routes, center } = useContext(CarContext);

	const setup = useCallback(() => {
		const map = new window.google.maps.Map(document.getElementById("map"), {
			zoom: 10,
			center: center,
			mapTypeId: "terrain",
			disableDefaultUI: true,
		});

		const image = {
			url: "/Images/Group.svg", // image is 512 x 512
			scaledSize: new window.google.maps.Size(40, 40),
		};

		const start = new window.google.maps.Marker({
			position: routes[0],
			map,
			icon: image,
		});

		const end = new window.google.maps.Marker({
			position: routes[routes.length - 1],
			map,
			icon: image,
		});

		start.setMap(map);
		end.setMap(map);

		const carPath = new window.google.maps.Polyline({
			path: routes,
			geodesic: true,
			strokeColor: "#39B0FA",
			strokeOpacity: 1.0,
			strokeWeight: 4,
		});

		carPath.setMap(map);
	}, [routes, center]);

	useEffect(() => {
		routes && setup();
	}, [routes, setup]);

	return <div className="gmaps" id="map" />;
}
