import React from "react";

export default function Button({ handleClick, disabled, title }) {
	return (
		<div>
			<button onClick={handleClick} disabled={disabled}>
				{title}
			</button>
		</div>
	);
}
