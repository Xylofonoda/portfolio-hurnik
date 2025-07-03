import React from "react";
import Modal from "../helper-components/Modal";
import { frontendSkills, overallSkills } from "../../consts/Skills";
import WorkExperience from "../helper-components/WorkExperience";
import SkillsAcquired from "../helper-components/SkilllsAcquired";
import PositionDialog from "../dialogs/PositionDialog";
import SectionTitle from "../helper-components/SectionTitle";
import RevealOnScroll from "../helper-components/RevealOnScroll";

export interface ModalProps {
	isOpen: boolean;
	acquiredSkills?: string[];
	positionDescription?: string;
	positionTitle?: string;
	personalAdvancements?: string[];
	totalStayInPosition?: string;
}

const About: React.FunctionComponent = () => {

	const emptyModalProps: ModalProps = {
		isOpen: false,
		acquiredSkills: [],
		positionDescription: "",
		positionTitle: "",
		personalAdvancements: [],
		totalStayInPosition: "",
	};

	const [modalOpen, setModalOpen] = React.useState<ModalProps>(emptyModalProps);

	return (
		<>
			<section
				id="about"
				className="min-h-screen flex items-center justify-center py-20"
			>
				<RevealOnScroll>
					<div className="max-w-3xl mx-auto px-4">
						<SectionTitle title={"About me"} />
						<div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
							<p className="text-gray-300 mb-6">
								Self taught frontend developer with a passion for creating beautiful and functional web applications.
							</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<SkillsAcquired
									acquiredSkills={frontendSkills}
									typeOfSkills="Frontend"
								/>
								<SkillsAcquired
									acquiredSkills={overallSkills}
									typeOfSkills="Overall"
								/>
							</div>
						</div>
						<WorkExperience
							setModalOpen={setModalOpen}
						/>
					</div>
				</RevealOnScroll>
			</section>
			<Modal
				isOpen={modalOpen.isOpen}
				onClose={() => setModalOpen({ isOpen: false })}
			>
				<PositionDialog
					isOpen={modalOpen.isOpen}
					acquiredSkills={modalOpen.acquiredSkills}
					personalAdvancements={modalOpen.personalAdvancements}
					positionDescription={modalOpen.positionDescription}
					positionTitle={modalOpen.positionTitle}
					totalStayInPosition={modalOpen.totalStayInPosition}
				/>
			</Modal>
		</>
	);
};

export default About;
