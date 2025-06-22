import React from "react";
import SectionTitle from "../helper-components/SectionTitle";
import SkillsAcquired from "../helper-components/SkilllsAcquired";
import { portfolioTechAndSkills } from "../../consts/Skills";


const Projects: React.FunctionComponent = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-4">
            <SectionTitle title={"Featured projects"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-semibold">Project 1: Portfolio Website</h3>
                    <p className="text-gray-400">
                        A scalable and responsive portfolio website designed to showcase my skills, projects, and experience. Built with modern web technologies to ensure fast performance, accessibility, and ease of maintenance.
                    </p>
                    <div>
                        <SkillsAcquired
                            className="pt-2"
                            acquiredSkills={portfolioTechAndSkills}
                            typeOfSkills="Tech and skills utilized"
                        />
                    </div>
                </div>
                <div className="">

                </div>
            </div>
        </div>
    </section>
}
export default Projects;