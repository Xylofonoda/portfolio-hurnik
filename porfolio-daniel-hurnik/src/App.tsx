import React from "react";
import { Toaster } from 'react-hot-toast';

// Required imports

import "./App.css";
import "./index.css";

// Components

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contacts from "./components/sections/Contacts";
import Footer from "./components/sections/Footer";

function App() {
	const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
	// Save an item to localStorage
	const [isLoaded, setIsLoaded] = React.useState<boolean>(() => {
		const stored = window.localStorage.getItem("isLoaded");
		return stored === "true";
	});

	const saveToLocalStorage = (key: string, value: string) => {
		window.localStorage.setItem(key, value);
	};

	React.useEffect(() => {
		if (isLoaded) {
			saveToLocalStorage("isLoaded", "true");
		}
	}, [isLoaded]);


	return (
		<>
			{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
			<div
				className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
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
				<Projects />
				<Contacts />
				{/* <ContactSection /> */}
				<Footer />
				<Toaster />
			</div>
		</>
	);
}

export default App;
