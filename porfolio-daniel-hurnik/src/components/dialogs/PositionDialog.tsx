import React from "react";
import type { ModalProps } from "../sections/About";
import SkillsAcquired from "../helper-components/SkilllsAcquired";

const PositionDialog: React.FunctionComponent<ModalProps> = (props) => {
	return <>
		<h2 className="top-0 text-lg md:text-xl p-3 font-bold text-center mb-3">
			{props.positionTitle} <span className="font-semibold">({props.totalStayInPosition})</span>
		</h2>
		<div className="text-gray-300 p-3 text-md mb-3 w-full max-w-xl mx-auto">
			{props.positionDescription}
		</div>
		<div className="max-w-2xl mx-auto rounded-lg">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<SkillsAcquired
					acquiredSkills={props.acquiredSkills || []}
					typeOfSkills="Frontend"
				/>
				{
					props.personalAdvancements && props.personalAdvancements.length > 0 &&
					<SkillsAcquired
						acquiredSkills={props.personalAdvancements || []}
						typeOfSkills="Personal Advancements"
					/>
				}
			</div>
		</div>
	</>;
};

export default PositionDialog;
