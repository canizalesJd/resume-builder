import { useState } from "react";
import Form from "./Form";
import PDFTemplate from "./PDFTemplate";

const ResumeBuilder = () => {
	const [formData, setFormData] = useState({
		personalInfo: {},
		workExperience: [],
		education: [],
		skills: [],
		projects: [],
	});

	const handleFormDataChange = (section, data) => {
		setFormData((prevData) => ({
			...prevData,
			[section]: data,
		}));
	};

	return (
		<div className="container mx-auto min-w-full">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-screen">
				<div className="py-5 container mx-auto w-full lg:w-11/12">
					<Form onFormDataChange={handleFormDataChange} />
				</div>
				<div className="bg-gray-200 p-4 min-h-full">
					<PDFTemplate formData={formData} />
				</div>
			</div>
		</div>
	);
};

export default ResumeBuilder;
