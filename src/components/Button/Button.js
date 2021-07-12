import React from "react";

export default function Button({ handleGetRoute }) {
	return (
		<div>
			<button onClick={handleGetRoute}>GENERATE</button>
		</div>
	);
}
