import React from "react";
import type { ModalProps } from "../sections/About";

interface WorkPositionProps extends Omit<ModalProps, "isOpen"> {
	onModalOpen: React.Dispatch<React.SetStateAction<ModalProps>>;
}

const WorkPosition: React.FunctionComponent<WorkPositionProps> = (props) => {
	const { acquiredSkills, onModalOpen, personalAdvancements, positionDescription, positionTitle, totalStayInPosition } = props;
	return (
		<a
			className="cursor-pointer hover:underline"
			onClick={() =>
				onModalOpen({
					isOpen: true,
					acquiredSkills,
					personalAdvancements,
					positionDescription,
					positionTitle,
					totalStayInPosition,
				})
			}
		>
			<strong>{props.positionTitle}</strong> ({totalStayInPosition})
		</a>
	);
};

export default WorkPosition;
