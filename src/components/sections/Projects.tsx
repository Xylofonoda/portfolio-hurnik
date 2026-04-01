import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import Column from "../helper-components/Column";
import SkillsAcquired from "../helper-components/SkilllsAcquired";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

interface Project {
    title: string;
    description: string;
    skills: string[];
    github: string;
    live?: string;
    wip?: boolean;
    easterEgg?: boolean;
}

const PROJECTS: Omit<Project, "title" | "description">[] = [
    {
        skills: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Playwright", "Ollama", "MUI"],
        github: "https://github.com/Xylofonoda/2LLazy",
        wip: true,
    },
    {
        skills: ["React", "TypeScript", "Redux Toolkit", "Tailwind", "shadcn/ui", "Supabase", "OpenAI"],
        github: "https://github.com/Xylofonoda/transaction-risk-dashboard",
        live: "https://pulseriskdashboard.netlify.app/",
    },
    {
        skills: ["TypeScript", "Monorepo"],
        github: "https://github.com/Xylofonoda/pizza_cms",
    },
    {
        skills: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        github: "https://github.com/Xylofonoda/portfolio-hurnik",
        easterEgg: true,
    },
];

const Projects: React.FunctionComponent = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const projects = PROJECTS.map((p, i) => ({ ...p, ...t.projects.items[i] }));
    const [easterEggVisible, setEasterEggVisible] = useState<string | null>(null);
    return (
        <Column title={t.columns.projects}>
            <div className="space-y-3">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="p-4 rounded-xl transition-colors duration-200"
                        style={{
                            background: "var(--color-bg)",
                            border: "1px solid var(--color-border)",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--color-border-strong)")}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--color-border)")}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <h3 className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                                    {project.title}
                                </h3>
                                {project.wip && (
                                    <span
                                        className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded"
                                        style={{
                                            color: "var(--color-dim)",
                                            border: "1px solid var(--color-border)",
                                        }}
                                    >
                                        {t.projects.wip}
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${project.title} on GitHub`}
                                    className="transition-colors duration-200"
                                    style={{ color: "var(--color-dim)" }}
                                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
                                    onMouseLeave={e => (e.currentTarget.style.color = "var(--color-dim)")}
                                >
                                    <Github size={14} />
                                </a>
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} live demo`}
                                        className="transition-colors duration-200"
                                        style={{ color: "var(--color-dim)" }}
                                        onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
                                        onMouseLeave={e => (e.currentTarget.style.color = "var(--color-dim)")}
                                    >
                                        <ExternalLink size={14} />
                                    </a>
                                )}
                                {project.easterEgg && (
                                    <div
                                        className="relative"
                                        onMouseEnter={() => setEasterEggVisible(project.title)}
                                        onMouseLeave={() => setEasterEggVisible(null)}
                                    >
                                        <button
                                            aria-label="Easter egg"
                                            className="transition-colors duration-200 cursor-default"
                                            style={{ color: easterEggVisible === project.title ? "var(--color-text)" : "var(--color-dim)" }}
                                        >
                                            <ExternalLink size={14} />
                                        </button>
                                        {easterEggVisible === project.title && (
                                            <div
                                                className="absolute right-0 bottom-full mb-2 px-2 py-1 rounded text-[10px] whitespace-nowrap pointer-events-none"
                                                style={{
                                                    zIndex: 9999,
                                                    background: "var(--color-surface)",
                                                    color: "var(--color-text)",
                                                    border: "1px solid var(--color-border-strong)",
                                                }}
                                            >
                                                you're already here dummy
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--color-muted)" }}>
                            {project.description}
                        </p>
                        <SkillsAcquired acquiredSkills={project.skills} />
                    </div>
                ))}
            </div>
        </Column>
    );
}
export default Projects;