import Education from "./form/Education";
import PersonalInformation from "./form/PersonalInformation";
import Skills from "./form/Skills";
import WorkExperience from "./form/WorkExperience";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { SchoolIcon } from "./icons/SchoolIcon";
import { UserIcon } from "./icons/UserIcon";
import { BriefcaseIcon } from "./icons/BriefcaseIcon";
import { BulbIcon } from "./icons/BulbIcon";
const Form = () => {
	return (
		<div>
			<h2 className="text-xl p-4 font-semibold">Content</h2>
			<Accordion variant="splitted" defaultExpandedKeys={["1", "2"]}>
				<AccordionItem
					key="1"
					aria-label="Personal Information"
					title={<h3 className="text-foreground-600">Personal Information</h3>}
					startContent={<UserIcon className="text-2xl text-foreground-400" />}>
					{<PersonalInformation />}
				</AccordionItem>
				<AccordionItem
					key="2"
					aria-label="Work Experience"
					title={<h3 className="text-foreground-600">Experience</h3>}
					startContent={
						<BriefcaseIcon className="text-2xl text-foreground-400" />
					}>
					{<WorkExperience />}
				</AccordionItem>
				<AccordionItem
					key="3"
					aria-label="Education"
					title={<h3 className="text-foreground-600">Education</h3>}
					startContent={
						<SchoolIcon className="text-2xl text-foreground-400" />
					}>
					{<Education />}
				</AccordionItem>
				<AccordionItem
					key="4"
					aria-label="Skills"
					title={<h3 className="text-foreground-600">Skills</h3>}
					startContent={<BulbIcon className="text-2xl text-foreground-400" />}>
					{<Skills />}
				</AccordionItem>
			</Accordion>
		</div>
	);
};
export default Form;
