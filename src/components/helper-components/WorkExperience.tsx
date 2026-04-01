import type { ModalProps } from "../sections/About";
import WorkPosition from "./WorkPosition";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";


interface WorkExperienceProps {
    setModalOpen: React.Dispatch<React.SetStateAction<ModalProps>>
}

const WorkExperience: React.FunctionComponent<WorkExperienceProps> = (props) => {
    const { language } = useLanguage();
    const t = translations[language];
    return (
        <div>
            <p className="text-xs uppercase tracking-[0.2em] font-medium mb-6" style={{ color: "var(--color-dim)" }}>
                {t.experience.sectionLabel}
            </p>
            <div style={{ borderTop: "1px solid var(--color-border)" }}>
                {t.experience.positions.map((pos) => (
                    <WorkPosition
                        key={pos.company}
                        onModalOpen={props.setModalOpen}
                        positionTitle={pos.title}
                        company={pos.company}
                        totalStayInPosition={pos.period}
                        acquiredSkills={[...pos.skills]}
                        personalAdvancements={[...pos.advancements]}
                        positionDescription={pos.description}
                    />
                ))}
                <div className="py-4" style={{ borderTop: "1px solid var(--color-border)" }}>
                    <p className="text-xs uppercase tracking-[0.15em] font-medium mb-3" style={{ color: "var(--color-faint)" }}>
                        {t.experience.partTime}
                    </p>
                    <div className="space-y-2 text-sm" style={{ color: "var(--color-dim)" }}>
                        {t.experience.partTimeJobs.map((job) => (
                            <div key={job.company} className="flex justify-between">
                                <span>{job.role} · {job.company}</span>
                                <span>{job.period}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;