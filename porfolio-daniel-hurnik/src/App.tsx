import React from "react";

// Required imports

import "./App.css";
import "./index.css";

// Components

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";

function App() {
	const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
	const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

	return (
		<>
			{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
			<div
				className={`min-h-screen transition-opacity duration-700 ${
					isLoaded ? "opacity-100" : "opacity-0"
				} bg-black text-gray-100`}
			>
				<Navbar
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
				/>
				<MobileMenu
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
				/>
				<Home />
				<About />
			</div>
		</>
	);
}

export default App;
