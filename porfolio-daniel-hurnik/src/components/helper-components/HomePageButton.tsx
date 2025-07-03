import React from "react";

interface HomePageButtonProps {
	location: string;
	text: string;
	className: string;
}

const HomePageButton: React.FunctionComponent<HomePageButtonProps> = (props) => {
	return (
		<a
			className={`${props.className}`}
			href={`#${props.location}`}
		>
			{props.text}
		</a>
	);
};

export default HomePageButton;
