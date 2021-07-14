import GoogleMapReact from "google-map-react";
import React, { useContext } from "react";
import { CarContext } from "../../context/CarContext";

function GoogleMaps() {
	const { routes, center } = useContext(CarContext);
	console.log(routes);
	/* 
	if (routes) {
		setCenter({
			lat: 59.95,
			lng: 30.33,
		});
	} */

	const handleApiLoaded = (map, maps) => {
		console.log(map, maps);
	};

	return (
		// Important! Always set the container height explicitly
		<div className="gmaps">
			<GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyBh0mTqFD09A-jKgnpOw5_6mpL8qvGiOMA" }} center={center} defaultZoom={11} yesIWantToUseGoogleMapApiInternals onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}></GoogleMapReact>
		</div>
	);
}

export default GoogleMaps;
