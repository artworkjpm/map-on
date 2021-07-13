import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMaps extends Component {
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33,
		},
		zoom: 11,
	};

	render() {
		return (
			// Important! Always set the container height explicitly
			<div className="gmaps">
				<GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyBh0mTqFD09A-jKgnpOw5_6mpL8qvGiOMA" }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}></GoogleMapReact>
			</div>
		);
	}
}

export default GoogleMaps;
