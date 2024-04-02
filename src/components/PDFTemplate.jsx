import generatePDF, { Margin } from "react-to-pdf";

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
			<button onClick={() => generatePDF(getTargetElement, options)}>
				Generate PDF
			</button>
			<div className="container mx-auto py-5 px-20">
				<div id="content-id" className="bg-white min-h-[800px]">
					<div className="items-center px-10 py-4 text-foreground">
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
							<p className="font-semibold text-lg">Skills</p>
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
					</div>
				</div>
			</div>
		</div>
	);
};
export default PDFTemplate;
