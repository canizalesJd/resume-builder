import { Input } from "@nextui-org/react";

export default function Education() {
	return (
		<div className="container mx-auto py-3">
			<h3 className="font-semibold text-lg mb-3">Education</h3>
			<div className="grid grid-cols-3 gap-4">
				<Input type="text" label="School Name" className="max-w-full" />
				<Input type="text" label="Degree" className="max-w-full" />
				<Input type="text" label="Date" className="max-w-full" />
			</div>
		</div>
	);
}
