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

	const a = [
		{ lat: 3.028846373870724, lng: 101.62019493865353 },
		{ lat: 3.0293392107899226, lng: 101.62000181960445 },
		{ lat: 3.0297677644503347, lng: 101.61980870055538 },
		{ lat: 3.0301963179410842, lng: 101.61967995452267 },
		{ lat: 3.0307105819060256, lng: 101.6194868354736 },
		{ lat: 3.0319319578431805, lng: 101.61916497039181 },
	];

	const handleApiLoaded = (map, maps) => {
		console.log(map, maps);
	};

	return (
		// Important! Always set the container height explicitly
		<div className="gmaps">
			{/* <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyBh0mTqFD09A-jKgnpOw5_6mpL8qvGiOMA" }} center={center} defaultZoom={11} yesIWantToUseGoogleMapApiInternals onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}> */}
			<Polyline
				geodesic={true}
				options={{
					path: a,
					strokeColor: "#00ffff",
					strokeOpacity: 1,
					strokeWeight: 6,
					icons: [
						{
							offset: "0",
							repeat: "10px",
						},
					],
				}}
			/>
		</div>
	);
}

export default GoogleMaps;
