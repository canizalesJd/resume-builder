import { Accordion, AccordionItem } from "@nextui-org/react";
import {
	SchoolIcon,
	UserIcon,
	BriefcaseIcon,
	BulbIcon,
	BracketsIcon,
} from "./icons/IconExports";
import {
	Education,
	PersonalInformation,
	Skills,
	WorkExperience,
	Projects,
} from "./form/FormExports";

const handleFormDataChange = (setFormData) => (section, data) => {
	setFormData((prevData) => ({
		...prevData,
		[section]: data,
	}));
};

const Form = ({ setFormData }) => {
	return (
		<div>
			<h2 className="text-xl p-4 font-semibold">Content</h2>
			<Accordion
				variant="splitted"
				defaultExpandedKeys={["1", "2"]}
				keepContentMounted>
				<AccordionItem
					key="1"
					aria-label="Personal Information"
					title={<h3 className="text-foreground-600">Personal Information</h3>}
					startContent={<UserIcon className="text-2xl text-foreground-400" />}>
					{
						<PersonalInformation
							onDataChange={handleFormDataChange(setFormData)}
						/>
					}
				</AccordionItem>
				<AccordionItem
					key="2"
					aria-label="Work Experience"
					title={<h3 className="text-foreground-600">Experience</h3>}
					startContent={
						<BriefcaseIcon className="text-2xl text-foreground-400" />
					}>
					{<WorkExperience onDataChange={handleFormDataChange(setFormData)} />}
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
					{<Skills onDataChange={handleFormDataChange(setFormData)} />}
				</AccordionItem>
				<AccordionItem
					key="5"
					aria-label="Projects"
					title={<h3 className="text-foreground-600">Projects</h3>}
					startContent={
						<BracketsIcon className="text-2xl text-foreground-400" />
					}>
					{<Projects />}
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default Form;
