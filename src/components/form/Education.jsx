import { Input, Button } from "@nextui-org/react";

export default function Education() {
	return (
		<div className="container mx-auto py-3">
			<h3 className="font-semibold text-lg mb-3">Education</h3>
			<div className="grid  md:grid-cols-2 grid-cols-1 gap-4">
				<Input
					type="text"
					label="School Name"
					className="max-w-full"
					isRequired
					placeholder="Harvard"
				/>
				<Input
					type="text"
					label="Degree"
					className="max-w-full"
					isRequired
					placeholder="Computer Science"
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
			</div>
			{/* TO DO: Add container for the list of education inputs */}
			<div className="container flex py-1">
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
