import React from 'react';

interface SkillsAcquiredProps {
    acquiredSkills: string[];
    typeOfSkills?: string;
    className?: string;
}


const SkillsAcquired: React.FunctionComponent<SkillsAcquiredProps> = (props) => {
    return (
        <div className={props.className}>
            {props.typeOfSkills && (
                <p className="text-xs uppercase tracking-[0.15em] font-medium mb-3" style={{ color: "var(--color-dim)" }}>
                    {props.typeOfSkills}
                </p>
            )}
            <div className="flex flex-wrap gap-1.5">
                {props.acquiredSkills.map((skill, key) => (
                    <span
                        key={key}
                        className="text-xs px-2.5 py-1 rounded-sm transition-colors duration-200 cursor-default"
                        style={{ color: "var(--color-muted)", border: "1px solid var(--color-border-input)" }}
                        onMouseEnter={e => {
                            e.currentTarget.style.color = "var(--color-text)";
                            e.currentTarget.style.borderColor = "var(--color-border-strong)";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.color = "var(--color-muted)";
                            e.currentTarget.style.borderColor = "var(--color-border-input)";
                        }}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default SkillsAcquired;