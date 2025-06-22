import React from "react";


interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FunctionComponent<SectionTitleProps> = (props) => {
    return <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-emerald-600 text-center bg-clip-text text-transparent">
        {props.title}
    </h2>

}

export default SectionTitle;