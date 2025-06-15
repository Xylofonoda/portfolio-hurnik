import React from 'react';

interface SkillsAcquiredProps {
    acquiredSkills: string[];
    typeOfSkills?: "Frontend" | "Overall" | "Personal Advancements";
}


const SkillsAcquired: React.FunctionComponent<SkillsAcquiredProps> = (props) => {
    return <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4">{props.typeOfSkills}</h3>
        <div className="flex flex-wrap gap-2">
            {props.acquiredSkills.map((skill, key) => {
                return (
                    <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm leading-tight hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex items-center justify-center"
                    >
                        {skill}
                    </span>
                );
            })}
        </div>
    </div>

}

export default SkillsAcquired;