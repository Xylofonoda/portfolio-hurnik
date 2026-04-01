import React from "react";
import { useTheme, type Theme } from "../../context/ThemeContext";

const THEMES: { id: Theme; label: string; description: string }[] = [
  { id: "dark", label: "Dark", description: "Default dark" },
  { id: "light", label: "Light", description: "Light mode" },
  { id: "high-contrast", label: "High Contrast", description: "Accessibility" },
];

const ThemeSwitcher: React.FunctionComponent = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const current = THEMES.find(t => t.id === theme);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(p => !p)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Switch theme"
        className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded transition-colors duration-200"
        style={{
          color: 'var(--color-muted)',
          border: '1px solid var(--color-border)',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
      >
        <ThemeIcon theme={theme} />
        {current?.label}
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-1.5 rounded shadow-xl z-50 py-1 min-w-[160px]"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border-strong)',
          }}
        >
          {THEMES.map(t => (
            <button
              key={t.id}
              role="option"
              aria-selected={t.id === theme}
              onClick={() => { setTheme(t.id); setOpen(false); }}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs text-left transition-colors duration-150"
              style={{ color: t.id === theme ? 'var(--color-text)' : 'var(--color-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
              onMouseLeave={e => (e.currentTarget.style.color = t.id === theme ? 'var(--color-text)' : 'var(--color-muted)')}
            >
              <ThemeIcon theme={t.id} />
              <span>{t.label}</span>
              {t.id === theme && (
                <span className="ml-auto" style={{ color: 'var(--color-dim)' }}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ThemeIcon: React.FunctionComponent<{ theme: Theme }> = ({ theme }) => {
  if (theme === "light") {
    return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    );
  }
  if (theme === "high-contrast") {
    return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
};

export default ThemeSwitcher;
