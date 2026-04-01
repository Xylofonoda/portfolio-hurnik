import React from "react";
import { Toaster } from 'react-hot-toast';
import { ChevronLeft, ChevronRight } from "lucide-react";

// Required imports

import "./App.css";
import "./index.css";

// Components

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contacts from "./components/sections/Contacts";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

export const MAIN_URL = `https://xylofonoda.github.io/portfolio-hurnik`

function App() {
	const [isLoaded, setIsLoaded] = React.useState<boolean>(() => {
		const stored = window.sessionStorage.getItem("isLoaded");
		return stored === "true";
	});
	const scrollRef = React.useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = React.useState(false);
	const [canScrollRight, setCanScrollRight] = React.useState(true);

	const saveToLocalStorage = (key: string, value: string) => {
		window.sessionStorage.setItem(key, value);
	};

	React.useEffect(() => {
		if (isLoaded) {
			saveToLocalStorage("isLoaded", "true");
		}
	}, [isLoaded]);

	React.useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			document.documentElement.style.setProperty("--spotlight-x", `${e.clientX}px`);
			document.documentElement.style.setProperty("--spotlight-y", `${e.clientY}px`);
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const updateScrollButtons = React.useCallback(() => {
		const el = scrollRef.current;
		if (!el) return;
		setCanScrollLeft(el.scrollLeft > 0);
		setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
	}, []);

	React.useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;
		el.addEventListener("scroll", updateScrollButtons, { passive: true });
		updateScrollButtons();
		return () => el.removeEventListener("scroll", updateScrollButtons);
	}, [updateScrollButtons]);

	const scroll = (direction: "left" | "right") => {
		const el = scrollRef.current;
		if (!el) return;
		const remaining = direction === "left"
			? el.scrollLeft
			: el.scrollWidth - el.scrollLeft - el.clientWidth;
		el.scrollBy({ left: direction === "left" ? -remaining : remaining, behavior: "smooth" });
	};


	return (
		<LanguageProvider>
			<ThemeProvider>
				{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
				<div
					className={`h-screen flex flex-col transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} relative overflow-hidden`}
					style={{ background: "var(--color-bg)", color: "var(--color-text)" }}
				>
					<div className="spotlight pointer-events-none fixed inset-0 z-30" aria-hidden="true" />
					<Navbar />
					<main className="flex-1 overflow-x-auto overflow-y-hidden" ref={scrollRef}>
						<div className="flex h-full gap-4 p-4 md:gap-6 md:p-6 snap-x snap-mandatory md:snap-none">
							<Home />
							<About />
							<Skills />
							<Projects />
							<Contacts />
						</div>
					</main>
					{canScrollLeft && (
						<button
							onClick={() => scroll("left")}
							className="fixed left-3 top-1/2 -translate-y-1/2 z-40 rounded-full p-2 backdrop-blur-md transition-opacity duration-200 hover:opacity-80 cursor-pointer"
							style={{
								background: "var(--color-surface)",
								border: "1px solid var(--color-border)",
								color: "var(--color-text)",
							}}
							aria-label="Scroll left"
						>
							<ChevronLeft size={20} />
						</button>
					)}
					{canScrollRight && (
						<button
							onClick={() => scroll("right")}
							className="fixed right-3 top-1/2 -translate-y-1/2 z-40 rounded-full p-2 backdrop-blur-md transition-opacity duration-200 hover:opacity-80 cursor-pointer"
							style={{
								background: "var(--color-surface)",
								border: "1px solid var(--color-border)",
								color: "var(--color-text)",
							}}
							aria-label="Scroll right"
						>
							<ChevronRight size={20} />
						</button>
					)}
					<Toaster />
				</div>
			</ThemeProvider>
		</LanguageProvider>
	);
}

export default App;
