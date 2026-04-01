import { Github, Linkedin, File } from "lucide-react";
import Column from "../helper-components/Column";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

const Home = () => {
	const { language } = useLanguage();
	const t = translations[language];
	return (
		<Column title={t.columns.about}>
			<div className="mb-8">
				<h1
					className="text-3xl font-semibold leading-tight tracking-tight mb-2"
					style={{ color: "var(--color-text)" }}
				>
					Daniel Hurník
				</h1>
				<p className="text-sm mb-4" style={{ color: "var(--color-dim)" }}>
					{t.home.role}
				</p>
				<p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
					{t.home.bio}
				</p>
			</div>

			<div className="space-y-3">
				{(Object.keys(t.home.labels) as (keyof typeof t.home.labels)[]).map((key) => (
					<div
						key={key}
						className="flex items-baseline justify-between gap-2 pb-3"
						style={{ borderBottom: "1px dotted var(--color-border)" }}
					>
						<span className="text-xs shrink-0" style={{ color: "var(--color-dim)" }}>
							{t.home.labels[key]}
						</span>
						<span className="text-xs text-right" style={{ color: "var(--color-text)" }}>
							{t.home.values[key]}
						</span>
					</div>
				))}
			</div>

			<div className="flex items-center gap-4 mt-8 pt-6" style={{ borderTop: "1px solid var(--color-border)" }}>
				{[
					{ href: "https://www.linkedin.com/in/daniel-hurník-077b27231/", icon: <Linkedin size={15} />, label: "LinkedIn" },
					{ href: "https://github.com/Xylofonoda", icon: <Github size={15} />, label: "GitHub" },
					{ href: t.home.resumeUrl, icon: <File size={15} />, label: "Resume" },
				].map(({ href, icon, label }) => (
					<a
						key={label}
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={label}
						className="transition-colors duration-200"
						style={{ color: "var(--color-dim)" }}
						onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
						onMouseLeave={e => (e.currentTarget.style.color = "var(--color-dim)")}
					>
						{icon}
					</a>
				))}
			</div>
		</Column>
	);
};

export default Home;
