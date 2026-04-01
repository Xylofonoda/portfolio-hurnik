import React from "react";

interface ColumnProps {
  title: string;
  children: React.ReactNode;
}

const Column: React.FunctionComponent<ColumnProps> = ({ title, children }) => {
  return (
    <div
      className="h-full w-[85vw] max-w-[400px] shrink-0 flex flex-col rounded-3xl overflow-hidden snap-start"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div
        className="sticky top-0 z-10 px-5 py-3 backdrop-blur-md"
        style={{
          background: "var(--color-surface)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <h2
          className="text-xs uppercase tracking-[0.2em] font-medium"
          style={{ color: "var(--color-dim)" }}
        >
          {title}
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto p-5">
        {children}
      </div>
    </div>
  );
};

export default Column;
