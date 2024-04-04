import generatePDF, { Margin } from "react-to-pdf";
import { Button } from "@nextui-org/react";

const options = {
	method: "open",
	resolution: 3,
	page: {
		margin: Margin.NONE,
	},
	canvas: {
		// default is 'image/jpeg' for better size performance
		mimeType: "image/jpeg",
		qualityRatio: 1,
	},
};

// you can use a function to return the target element besides using React refs
const getTargetElement = () => document.getElementById("content-id");

const PDFTemplate = () => {
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
						<p className="text-3xl font-bold">John Doe</p>
						<p className="text-md font-semibold ">Software Developer</p>
						<div className="flex justify-items-between py-2">
							<p className="text-sm text-foreground-500 mr-5 underline">
								john_doe@email.com
							</p>
							<p className="text-sm text-foreground-500 mr-5 underline">
								+506 8888 8888
							</p>
							<p className="text-sm text-foreground-500 mr-5">
								San Jose, Costa Rica
							</p>
						</div>
					</div>
					<div className="flex">
						<div className="px-10 py-2 w-8/12">
							<p className="font-semibold text-xl">Experience</p>

							<div className="py-1">
								<p className="text-md font-semibold">SDE 2 - Google</p>
								<p className="text-sm text-foreground-600 mb-1">
									Jan 2022 - Now
								</p>
								<p className="text-sm">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Voluptate, quisquam!
								</p>
							</div>
							<div className="py-1">
								<p className="text-md font-semibold">SDE 1 - Amazon</p>
								<p className="text-sm text-foreground-600 mb-1">
									Aug 2019 - Dec 2021
								</p>
								<p className="text-sm">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Voluptate, quisquam!
								</p>
							</div>
							<div className="py-1">
								<p className="text-md font-semibold">
									Junior React Developer - Vercel
								</p>
								<p className="text-sm text-foreground-600 mb-1">
									Dec 2018 - Jul 2019
								</p>
								<p className="text-sm">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Voluptate, quisquam!
								</p>
							</div>
						</div>
						<div className="px-5 py-2 w-4/12">
							<div className="mb-5">
								<p className="font-semibold text-lg mb-1">Skills</p>
								<p className="text-sm text-foreground-600 mb-1">
									Javascript, React, NodeJS
								</p>
								<p className="text-sm text-foreground-600 mb-1">
									HTML, CSS, TailwindCSS
								</p>
								<p className="text-sm text-foreground-600 mb-1">Supabase</p>
								<p className="text-sm text-foreground-600 mb-1">Firebase</p>
								<p className="text-sm text-foreground-600 mb-1">
									Python and Flask
								</p>
							</div>
							<div className="mb-5">
								<p className="font-semibold text-lg mb-1">Projects</p>
								<div className="mb-2">
									<p className="text-sm font-semibold">Resume Builder</p>
									<p className="text-xs text-foreground-600 mb-1">
										React, TailwindCSS
									</p>
									<p className="text-sm text-blue-500 mb-1">
										www.resume-builder.com
									</p>
									<p className="text-sm">
										Dynamic creation of Resumes, built with NextUi and React.
									</p>
								</div>
								<div className="mb-2">
									<p className="text-sm font-semibold">Netflix Clone</p>
									<p className="text-xs text-foreground-600 mb-1">
										React, Shadcn UI, TailwindCSS, Supabase
									</p>
									<p className="text-sm">
										A Netflix Clone built with React, Shadcn UI, TailwindCSS,
										Supabase.
									</p>
								</div>
							</div>
							<div className="mb-5">
								<p className="font-semibold text-lg mb-1">Education</p>
								<div className="mb-2">
									<p className="text-sm font-semibold">
										Certified AWS Solutions Architect- AWS
									</p>
									<p className="text-sm text-foreground-600">
										Jun 2020 - Aug 2020
									</p>
								</div>
								<div className="mb-2">
									<p className="text-sm font-semibold">
										Computer Science - Harvard
									</p>
									<p className="text-sm text-foreground-600">
										Apr 2014 - Dec 2018
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default PDFTemplate;
