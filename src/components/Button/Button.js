import React from "react";

export default function Button({ handleGetRoute, disabled }) {
	return (
		<div>
			<button onClick={handleGetRoute} disabled={disabled}>
				GENERATE
			</button>
		</div>
	);
}
