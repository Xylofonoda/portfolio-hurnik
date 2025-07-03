import React from "react";

interface DescriptionListProps {
    description?: string;
}

const DescriptionList: React.FunctionComponent<DescriptionListProps> = (props) => {
    const items = (props.description ?? "")
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.startsWith('-'))
        .map(line => line.replace(/^- /, ''));

    return (
        <ul className="list-disc pl-5 space-y-1">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default DescriptionList;