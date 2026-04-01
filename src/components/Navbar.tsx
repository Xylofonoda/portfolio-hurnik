import ThemeSwitcher from "./helper-components/ThemeSwitcher";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
	const { language, setLanguage } = useLanguage();

	return (
		<nav className="w-full z-40 shrink-0" style={{ background: "var(--color-bg)" }}>
			<div className="px-4 md:px-6">
				<div className="flex justify-between items-center h-14">
					<span
						className="text-sm font-medium tracking-tight"
						style={{ color: "var(--color-text)" }}
					>
						Daniel Hurník
					</span>
					<div className="flex items-center gap-3">
						<button
							onClick={() => setLanguage(language === "en" ? "cs" : "en")}
							className="text-xs px-2.5 py-1.5 rounded transition-colors duration-200 font-mono tracking-wider"
							style={{
								color: "var(--color-muted)",
								border: "1px solid var(--color-border)",
							}}
							onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
							onMouseLeave={e => (e.currentTarget.style.color = "var(--color-muted)")}
							aria-label="Switch language"
						>
							{language === "en" ? "CS" : "EN"}
						</button>
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
