import { useState } from "react";
import { Input } from "@nextui-org/react";

const PersonalInformation = ({ onDataChange }) => {
	const [personalInfo, setPersonalInfo] = useState({
		fullName: "",
		jobTitle: "",
		email: "",
		phone: "",
		location: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		const updatedPersonalInfo = {
			...personalInfo,
			[name]: value,
		};
		setPersonalInfo(updatedPersonalInfo);
		onDataChange("personalInfo", updatedPersonalInfo);
	};

	return (
		<div className="container mx-auto pb-3">
			<div className="grid md:grid-cols-2 grid-cols-1 gap-4">
				<Input
					type="text"
					label="Full Name"
					className="max-w-full"
					placeholder="John Doe"
					isRequired
					name="fullName"
					value={personalInfo.fullName}
					onChange={handleInputChange}
				/>
				<Input
					type="text"
					label="Job Title"
					placeholder="Software Developer"
					className="max-w-full"
					isRequired
					name="jobTitle"
					value={personalInfo.jobTitle}
					onChange={handleInputChange}
				/>
				<Input
					type="email"
					label="Email"
					className="max-w-full"
					placeholder="john_doe@email.com"
					isRequired
					name="email"
					value={personalInfo.email}
					onChange={handleInputChange}
				/>
				<Input
					type="tel"
					label="Phone"
					className="max-w-full"
					placeholder="+506 8888 8888"
					isRequired
					name="phone"
					value={personalInfo.phone}
					onChange={handleInputChange}
				/>
				<Input
					type="text"
					label="Location"
					className="max-w-full col-span-full"
					placeholder="San Jose, Costa Rica"
					name="location"
					value={personalInfo.location}
					onChange={handleInputChange}
				/>
			</div>
		</div>
	);
};

export default PersonalInformation;
