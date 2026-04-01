import React from "react";
import type { ModalProps } from "../sections/About";

interface WorkPositionProps extends Omit<ModalProps, "isOpen"> {
	onModalOpen: React.Dispatch<React.SetStateAction<ModalProps>>;
	company?: string;
}

const WorkPosition: React.FunctionComponent<WorkPositionProps> = (props) => {
	const { acquiredSkills, onModalOpen, personalAdvancements, positionDescription, positionTitle, totalStayInPosition, company } = props;
	return (
		<div
			className="py-4 cursor-pointer"
			style={{ borderBottom: "1px solid var(--color-border)" }}
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
			<div className="flex items-start justify-between gap-4 group">
				<div>
					<p
						className="text-sm font-medium transition-colors duration-200"
						style={{ color: "var(--color-text)" }}
					>
						{positionTitle}
					</p>
					{company && (
						<p className="text-xs mt-0.5" style={{ color: "var(--color-dim)" }}>{company}</p>
					)}
				</div>
				<span className="text-xs whitespace-nowrap shrink-0 pt-0.5" style={{ color: "var(--color-dim)" }}>
					{totalStayInPosition}
				</span>
			</div>
		</div>
	);
};

export default WorkPosition;
