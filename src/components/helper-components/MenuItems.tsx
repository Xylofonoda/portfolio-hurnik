import React from "react";

interface MenuItemsProps {
	setMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
	menuOpen?: boolean;
}

const MenuItems: React.FunctionComponent<MenuItemsProps> = (props) => {
	const MOBILE_CLASSES = `text-3xl font-medium my-3 block transition-all duration-300 ${props.menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
		}`;
	const REGULAR_CLASSES = "text-sm transition-colors duration-200";

	return (
		<>
			{["home", "about", "projects", "contact"].map((section) => (
				<a
					key={section}
					href={`#${section}`}
					onClick={() => props.setMenuOpen?.((prev) => !prev)}
					className={props.menuOpen ? MOBILE_CLASSES : REGULAR_CLASSES}
					style={{ color: "var(--color-muted)" }}
					onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
					onMouseLeave={e => (e.currentTarget.style.color = "var(--color-muted)")}
				>
					{section.charAt(0).toUpperCase() + section.slice(1)}
				</a>
			))}
		</>
	);
};

export default MenuItems;
