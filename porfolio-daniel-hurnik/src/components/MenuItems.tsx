import React from "react";

interface MenuItemsProps {
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	menuOpen: boolean;
}

const MenuItems: React.FunctionComponent<MenuItemsProps> = (props) => {
	const MOBILE_CLASSES = `text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${props.menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`;
	const REGULAR_CLASSES = "text-gray-300 hover:text-white transition-colors";

	return (
		<>
			<a
				href="#home"
				onClick={() => props.setMenuOpen((prev) => !prev)}
				className={props.menuOpen ? MOBILE_CLASSES : REGULAR_CLASSES}
			>
				Home
			</a>
			<a
				href="#about"
				onClick={() => props.setMenuOpen((prev) => !prev)}
				className={props.menuOpen ? MOBILE_CLASSES : REGULAR_CLASSES}
			>
				About
			</a>
			<a
				href="#projects"
				onClick={() => props.setMenuOpen((prev) => !prev)}
				className={props.menuOpen ? MOBILE_CLASSES : REGULAR_CLASSES}
			>
				Projects
			</a>
			<a
				href="#contact"
				onClick={() => props.setMenuOpen((prev) => !prev)}
				className={props.menuOpen ? MOBILE_CLASSES : REGULAR_CLASSES}
			>
				Contact
			</a>
		</>
	);
};

export default MenuItems;
