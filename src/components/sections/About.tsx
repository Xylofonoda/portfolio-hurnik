import React from "react";
import Modal from "../helper-components/Modal";
import WorkExperience from "../helper-components/WorkExperience";
import PositionDialog from "../dialogs/PositionDialog";
import Column from "../helper-components/Column";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../i18n/translations";

export interface ModalProps {
	isOpen: boolean;
	acquiredSkills?: string[];
	positionDescription?: string;
	positionTitle?: string;
	personalAdvancements?: string[];
	totalStayInPosition?: string;
}

const About: React.FunctionComponent = () => {
	const { language } = useLanguage();
	const t = translations[language];

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
			<Column title={t.columns.experience}>
				<WorkExperience setModalOpen={setModalOpen} />
			</Column>
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
