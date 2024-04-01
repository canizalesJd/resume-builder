import Education from "./form/Education";
import PersonalInformation from "./form/PersonalInformation";
import Skills from "./form/Skills";
import WorkExperience from "./form/WorkExperience";
import Projects from "./form/Projects";
const Form = () => {
	return (
		<div>
			<PersonalInformation />
			<Education />
			<WorkExperience />
			<Skills />
			<Projects />
		</div>
	);
};
export default Form;
