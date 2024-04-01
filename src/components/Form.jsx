import Education from "./form/Education";
import PersonalInformation from "./form/PersonalInformation";
import Skills from "./form/Skills";
import WorkExperience from "./form/WorkExperience";
const Form = () => {
	return (
		<div>
			<PersonalInformation />
			<Education />
			<WorkExperience />
			<Skills />
		</div>
	);
};
export default Form;
