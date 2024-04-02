import { Input } from "@nextui-org/react";

export default function PersonalInformation() {
	return (
		<div className="container mx-auto pb-3">
			<div className="grid md:grid-cols-2 grid-cols-1 gap-4">
				<Input
					type="text"
					label="Full Name"
					className="max-w-full"
					placeholder="John Doe"
					isRequired
				/>
				<Input
					type="text"
					label="Job Title"
					placeholder="Software Developer"
					className="max-w-full"
					isRequired
				/>
				<Input
					type="email"
					label="Email"
					className="max-w-full"
					placeholder="john_doe@email.com"
					isRequired
				/>
				<Input
					type="tel"
					label="Phone"
					className="max-w-full"
					placeholder="+506 8888 8888"
					isRequired
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
