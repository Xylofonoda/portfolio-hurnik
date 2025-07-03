import React from "react";
import MenuItems from "./helper-components/MenuItems";

interface NavbarProps {
	menuOpen: boolean;
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FunctionComponent<NavbarProps> = (props) => {
	React.useEffect(() => {
		document.body.style.overflow = props.menuOpen ? "hidden" : "";
	}, [props.menuOpen]);

	return (
		<nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
			<div className="max-w-5xl mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<a
						href="#home"
						className="font-mono text-xl font-bold text-white"
					>
						Daniel Hurník -<span className="text-blue-500"> Xylofonoda </span>
					</a>
					<div
						className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
						onClick={() => props.setMenuOpen((prev) => !prev)}
					>
						{!props.menuOpen ? <i className="fa-solid fa-bars " /> : null}
					</div>
					<div className="hidden md:flex items-center space-x-8">
						<MenuItems />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
