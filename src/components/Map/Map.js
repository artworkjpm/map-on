import React, { Component } from "react";

export default class GoogleMaps extends Component {
	componentDidMount() {
		const map = new window.google.maps.Map(document.getElementById("map"), {
			zoom: 3,
			center: { lat: 0, lng: -180 },
			mapTypeId: "terrain",
			disableDefaultUI: true,
		});
		const carRoutes = [
			{ lat: 37.772, lng: -122.214 },
			{ lat: 21.291, lng: -157.821 },
			{ lat: -18.142, lng: 178.431 },
			{ lat: -27.467, lng: 153.027 },
		];

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

		const carPath = new window.google.maps.Polyline({
			path: carRoutes,
			geodesic: true,
			strokeColor: "#FF0000",
			strokeOpacity: 1.0,
			strokeWeight: 2,
		});
		carPath.setMap(map);
	}

	render() {
		return <div className="gmaps" id="map" />;
	}
}
