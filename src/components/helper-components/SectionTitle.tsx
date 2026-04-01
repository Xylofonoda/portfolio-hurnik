import React from "react";


interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FunctionComponent<SectionTitleProps> = (props) => {
    return (
        <div className="flex items-center gap-4 mb-10">
            <span className="text-xs uppercase tracking-[0.2em] font-medium whitespace-nowrap" style={{ color: "var(--color-dim)" }}>
                {props.title}
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
        </div>
    );
}

export default SectionTitle;