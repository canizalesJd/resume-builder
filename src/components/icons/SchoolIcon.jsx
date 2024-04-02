export const SchoolIcon = (props) => {
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
			<path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
			<path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
		</svg>
	);
};
