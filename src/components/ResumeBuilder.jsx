import { useState } from "react";
import Form from "./Form";
import PDFTemplate from "./PDFTemplate";

const ResumeBuilder = () => {
	const [formData, setFormData] = useState({
		personalInfo: {},
		experienceList: [],
		education: [],
		skillsList: [],
		projects: [],
	});

	return (
		<div className="container mx-auto min-w-full">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-screen">
				<div className="py-5 container mx-auto w-full lg:w-11/12">
					<Form setFormData={setFormData} />
				</div>
				<div className="bg-gray-200 p-4 min-h-full">
					<PDFTemplate formData={formData} />
				</div>
			</div>
		</div>
	);
};

export default ResumeBuilder;
