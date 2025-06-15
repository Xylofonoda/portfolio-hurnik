import { FIRSTIS_DESC, OKAY_DESC, WEBDEVEL_DESC } from "../../consts/Descriptions";
import type { ModalProps } from "../sections/About";
import WorkPosition from "./WorkPosition";


interface WorkExperienceProps {
    setModalOpen: React.Dispatch<React.SetStateAction<ModalProps>>
}

const WorkExperience: React.FunctionComponent<WorkExperienceProps> = (props) => {
    return <div className="mt-8 gap-6">
        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">💼 Work Experience </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                    <WorkPosition
                        onModalOpen={props.setModalOpen}
                        positionTitle={"Frontend Developer at First Information System s.r.o."}
                        totalStayInPosition={"2023 - Present"}
                        acquiredSkills={["React", "Typescript", "Tailwind CSS", "Redux", "Jest", "Webpack", "Vite", "React-query"]}
                        personalAdvancements={["Improved code quality", "Enhanced team collaboration", "Optimized performance"]}
                        positionDescription={FIRSTIS_DESC}
                    />
                </li>
                <li>
                    <WorkPosition
                        onModalOpen={props.setModalOpen}
                        positionTitle={"Ecommerce developer at OKAY Holding s.r.o."}
                        totalStayInPosition={"2023 - 2023"}
                        acquiredSkills={["JQuery", "Liquid", "Shopify"]}
                        personalAdvancements={[]}
                        positionDescription={OKAY_DESC}
                    />
                </li>
                <li>
                    <WorkPosition
                        onModalOpen={props.setModalOpen}
                        positionTitle={"Frontend Developer/HR/Tester/Project Manager at Webdevel s.r.o."}
                        totalStayInPosition={"2021 - 2023"}
                        acquiredSkills={["Vue.js", "Bitbucket", "PHP", "Laravel", "MySQL", "Webhosting", "Wordpress", "HTML", "CSS", "Javascript", "Git", "Vuetify", "Boostrap", "Sass",]}
                        personalAdvancements={["Project management", "Hiring process", "Mentoring", "Meeting deadlines", "Team management"]}
                        positionDescription={WEBDEVEL_DESC}
                    />
                </li>
                <h4 className="text-lg font-semibold my-4">🕒 Part time roles</h4>
                <li>
                    <strong>Bartender at Ypsilon s.r.o.</strong> (2020 - 2021)
                </li>
                <li>
                    <strong>Replenishment Analyst / Buyer of Mens Apparel at D-SPORT s.r.o. </strong> (2018 - 2019)
                </li>
            </ul>
        </div>
    </div>
}

export default WorkExperience;