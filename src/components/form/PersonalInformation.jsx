import { Input } from "@nextui-org/react";

export default function PersonalInformation() {
	return (
		<div className="container mx-auto py-3">
			<h3 className="font-semibold text-lg mb-3">Personal Information</h3>
			<div className="grid grid-cols-2 gap-4">
				<Input
					type="text"
					label="Full Name"
					className="max-w-full"
					placeholder="John Doe"
				/>
				<Input
					type="text"
					label="Job Title"
					placeholder="Software Developer"
					className="max-w-full"
				/>
				<Input
					type="email"
					label="Email"
					className="max-w-full"
					placeholder="john_doe@email.com"
				/>
				<Input
					type="tel"
					label="Phone"
					className="max-w-full"
					placeholder="+506 8888 8888"
				/>
				<Input
					type="text"
					label="Location"
					className="max-w-full col-span-full"
					placeholder="San Jose, Costa Rica"
				/>
			</div>
		</div>
	);
}
