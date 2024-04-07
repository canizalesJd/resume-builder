import generatePDF, { Margin } from "react-to-pdf";
import { Button } from "@nextui-org/react";

const options = {
	method: "open",
	resolution: 3,
	page: {
		margin: Margin.NONE,
	},
	canvas: {
		mimeType: "image/jpeg",
		qualityRatio: 1,
	},
};

const getTargetElement = () => document.getElementById("content-id");

const PDFTemplate = ({ formData }) => {
	console.log(formData);
	const {
		personalInfo,
		experienceList,
		skillsList,
		educationList,
		projectList,
	} = formData;
	return (
		<div>
			<div className="container mx-auto py-0 px-20">
				<Button
					color="primary"
					onClick={() => generatePDF(getTargetElement, options)}>
					Download PDF
				</Button>
			</div>

			<div className="container mx-auto py-5 px-20">
				<div id="content-id" className="bg-white min-h-[800px]">
					<div className="items-center px-10 py-7 text-foreground">
						<p className="text-3xl font-bold">{personalInfo.fullName}</p>
						<p className="text-md font-semibold ">{personalInfo.jobTitle}</p>
						<div className="flex justify-items-between py-2">
							<p className="text-sm text-foreground-500 mr-5 underline">
								{personalInfo.email}
							</p>
							<p className="text-sm text-foreground-500 mr-5 underline">
								{personalInfo.phone}
							</p>
							<p className="text-sm text-foreground-500 mr-5">
								{personalInfo.location}
							</p>
						</div>
					</div>
					<div className="flex">
						{experienceList.length > 0 && (
							<div className="px-10 py-2 w-8/12">
								<p className="font-semibold text-xl">Experience</p>
								{experienceList.map((experience) => {
									return (
										<div
											className={experience.visible ? "py-1" : "hidden"}
											key={experience.uuid}>
											<p className="text-md font-semibold">
												{experience.title}
											</p>
											<p className="text-sm text-foreground-600 mb-1">
												{experience.startDate} {" - "}
												{experience.endDate ? experience.endDate : "Now"}
											</p>
											<p className="text-sm">{experience.description}</p>
										</div>
									);
								})}
							</div>
						)}

						<div className="px-5 py-2 w-4/12">
							{skillsList.length > 0 && (
								<div className="mb-5">
									<p className="font-semibold text-lg mb-1">Skills</p>
									{skillsList.map((skill) => {
										return (
											<p
												className="text-sm text-foreground-600 mb-1"
												key={skill.uuid}>
												{skill.skillName}
											</p>
										);
									})}
								</div>
							)}

							{projectList.length > 0 && (
								<div className="mb-5">
									<p className="font-semibold text-lg mb-1">Projects</p>
									{projectList.map((project) => {
										return (
											<div
												className={project.visible ? "mb-2" : "hidden"}
												key={project.uuid}>
												<p className="text-sm font-semibold">{project.title}</p>
												<p className="text-xs text-foreground-600 mb-1">
													{project.subTitle}
												</p>
												{project.url && (
													<p className="text-sm text-blue-500 mb-1">
														{project.url}
													</p>
												)}
												<p className="text-sm">{project.description}</p>
											</div>
										);
									})}
								</div>
							)}

							{educationList.length > 0 && (
								<div className="mb-5">
									<div className="mb-5">
										<p className="font-semibold text-lg mb-1">Education</p>
										{educationList.map((education) => {
											return (
												<div
													key={education.uuid}
													className={education.visible ? "py-1" : "hidden"}>
													<p className="text-sm font-semibold">
														{education.degree + " - " + education.schoolName}
													</p>
													<p className="text-sm text-foreground-600">
														{education.startDate} {" - "}
														{education.endDate ? education.endDate : "Now"}
													</p>
												</div>
											);
										})}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default PDFTemplate;
