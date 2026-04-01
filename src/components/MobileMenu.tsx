import React from "react";
import MenuItems from "./helper-components/MenuItems";
import ThemeSwitcher from "./helper-components/ThemeSwitcher";

interface MobileMenuProps {
	menuOpen: boolean;
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FunctionComponent<MobileMenuProps> = (props) => {
	return (
		<div
			className={`fixed inset-0 z-30 flex flex-col items-start justify-center px-8 transition-all duration-300 ease-in-out ${props.menuOpen ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"
				}`}
			style={{ background: "var(--color-bg)" }}
		>
			<MenuItems
				setMenuOpen={props.setMenuOpen}
				menuOpen={props.menuOpen}
			/>
			<div className="mt-8">
				<ThemeSwitcher />
			</div>
		</div>
	);
};

export default MobileMenu;
