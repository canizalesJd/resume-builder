import { Input } from "@nextui-org/react";

export default function PersonalInformation() {
	return (
		<div className="container mx-auto py-3">
			<h3 className="font-semibold text-lg mb-3">Personal Information</h3>

			<Input
				type="text"
				label="Full Name"
				className="max-w-xs"
				placeholder="John Doe"
			/>
			<Input
				type="text"
				label="Job Title"
				placeholder="Software Developer"
				className="max-w-xs"
			/>
			<Input
				type="email"
				label="Email"
				className="max-w-xs"
				placeholder="john_doe@email.com"
			/>
			<Input
				type="tel"
				label="Phone"
				className="max-w-xs"
				placeholder="+506 8888 8888"
			/>
			<Input
				type="text"
				label="Location"
				className="max-w-xs"
				placeholder="San Jose, Costa Rica"
			/>
		</div>
	);
}
