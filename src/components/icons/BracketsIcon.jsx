export const BracketsIcon = (props) => {
	return (
		<svg
			aria-hidden="true"
			fill="none"
			focusable="false"
			height="1em"
			role="presentation"
			viewBox="0 0 24 24"
			width="1em"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M8 4l-5 8l5 8" />
			<path d="M16 4l5 8l-5 8" />
		</svg>
	);
};
