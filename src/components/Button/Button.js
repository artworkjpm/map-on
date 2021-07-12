import React from "react";

export default function Button({ handleClick, disabled, title }) {
	return (
		<button onClick={handleClick} disabled={disabled}>
			{title}
		</button>
	);
}
