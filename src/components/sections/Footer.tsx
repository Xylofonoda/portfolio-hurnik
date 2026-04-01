import { Github, Linkedin, File } from "lucide-react";
import { MAIN_URL } from "../../App";

const Footer = () => {
    return (
        <footer className="py-8" style={{ borderTop: "1px solid var(--color-border)" }}>
            <div className="max-w-[720px] mx-auto px-6 flex justify-between items-center">
                <p className="text-xs" style={{ color: "var(--color-faint)" }}>
                    &copy; {new Date().getFullYear()} Daniel Hurník
                </p>
                <div className="flex items-center gap-5">
                    {[
                        { href: "https://www.linkedin.com/in/daniel-hurník-077b27231/", icon: <Linkedin size={16} />, label: "LinkedIn" },
                        { href: "https://github.com/Xylofonoda", icon: <Github size={16} />, label: "GitHub" },
                        { href: `${MAIN_URL}/resumedanielhurnik.pdf`, icon: <File size={16} />, label: "Resume" },
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
            </div>
        </footer>
    );
};

export default Footer;