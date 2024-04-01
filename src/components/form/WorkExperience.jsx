import { Input, Textarea, Button } from "@nextui-org/react";

export default function WorkExperience() {
	return (
		<div className="container mx-auto py-3">
			<h3 className="font-semibold text-lg mb-3">Work Experience</h3>
			<div className="grid grid-cols-2 gap-4">
				<Input
					isRequired
					type="text"
					label="Company Name"
					className="max-w-full"
					placeholder="Google"
				/>
				<Input
					isRequired
					type="text"
					label="Title"
					className="max-w-full"
					placeholder="Software Developer"
				/>
				<Input
					type="date"
					label="Start Date"
					className="max-w-full"
					isRequired
				/>
				<Input
					type="date"
					label="End Date"
					className="max-w-full"
					description="Leave empty if still in progress"
				/>
				<Textarea
					isRequired
					label="Job Description"
					placeholder="Briefly describe your work details"
					className="max-w-full col-span-2"
				/>
			</div>
			<div
				className="container flex py-2 justify-end
			">
				<Button variant="bordered" color="primary" className="w-40 mr-4 ">
					Clear
				</Button>
				<Button color="primary" className="w-40 ">
					Add
				</Button>
			</div>
		</div>
	);
}
