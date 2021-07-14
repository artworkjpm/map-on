import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from "react-google-maps";
import React, { useContext } from "react";
import { CarContext } from "../../context/CarContext";

export default function GoogleMaps() {
	const { routes, center } = useContext(CarContext);
	const a = [
		{ lat: 3.028846373870724, lng: 101.62019493865353 },
		{ lat: 3.0293392107899226, lng: 101.62000181960445 },
		{ lat: 3.0297677644503347, lng: 101.61980870055538 },
		{ lat: 3.0301963179410842, lng: 101.61967995452267 },
		{ lat: 3.0307105819060256, lng: 101.6194868354736 },
		{ lat: 3.0319319578431805, lng: 101.61916497039181 },
	];

	const MapWithAMarker = withScriptjs(
		withGoogleMap(() => (
			<GoogleMap defaultZoom={15} defaultCenter={{ lat: 3.028846373870724, lng: 101.62019493865353 }}>
				{/* <Marker position={{ lat: -34.397, lng: 150.644 }} /> */}
				<Marker position={a[0]} />

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
				<Marker position={a[a.length - 1]} />
			</GoogleMap>
		))
	);

	return <MapWithAMarker googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBh0mTqFD09A-jKgnpOw5_6mpL8qvGiOMA&v=3.exp&libraries=geometry,drawing,places" loadingElement={<div style={{ height: `200px` }} />} containerElement={<div className="gmaps" />} mapElement={<div style={{ height: `200px` }} />} />;
}
