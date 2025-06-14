import React from "react";
import MenuItems from "./MenuItems";

interface MobileMenuProps {
	menuOpen: boolean;
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FunctionComponent<MobileMenuProps> = (props) => {
	return (
		<div
			className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center tansition-all duration-300 ease-in-out ${
				props.menuOpen ? "h-screen opacity-100 pointer-events-auto" : "pointer-events-none h-0 opacity-0"
			}`}
		>
			<button
				className="absolute top-3 right-7.5 text-white text-3xl focus:outline-none cursor-pointer"
				onClick={() => props.setMenuOpen((prev) => !prev)}
				aria-label="Close menu"
			>
				<i className="fa-solid fa-times text-lg" />
			</button>
			<MenuItems
				setMenuOpen={props.setMenuOpen}
				menuOpen={props.menuOpen}
			/>
		</div>
	);
};

export default MobileMenu;
