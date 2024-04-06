import { useState } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";

export default function WorkExperience({ onDataChange }) {
	const [experience, setExperience] = useState({
		companyName: "",
		title: "",
		startDate: "",
		endDate: "",
		description: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		const updatedExperience = {
			...experience,
			[name]: value,
		};
		setExperience(updatedExperience);
		onDataChange("experience", updatedExperience);
	};

	const clearData = () => {
		setExperience({
			companyName: "",
			title: "",
			startDate: "",
			endDate: "",
			description: "",
		});
		onDataChange("experience", {});
	};

	const addExperience = () => {
		console.log("Add experience");
		onDataChange("experience", experience);
		clearData();
	};
	return (
		<div className="container mx-auto pb-3">
			<div className="grid md:grid-cols-2 grid-cols-1 gap-4">
				<Input
					isRequired
					type="text"
					label="Company Name"
					className="max-w-full"
					placeholder="Google"
					onChange={handleInputChange}
					name="companyName"
					value={experience.companyName}
				/>
				<Input
					isRequired
					type="text"
					label="Title"
					className="max-w-full"
					placeholder="Software Developer"
					onChange={handleInputChange}
					name="title"
					value={experience.title}
				/>
				<Input
					type="date"
					label="Start Date"
					className="max-w-full"
					isRequired
					onChange={handleInputChange}
					name="startDate"
					value={experience.startDate}
				/>
				<Input
					type="date"
					label="End Date"
					className="max-w-full"
					description="Leave empty if still in progress"
					onChange={handleInputChange}
					name="endDate"
					value={experience.endDate}
				/>
				<Textarea
					isRequired
					label="Job Description"
					placeholder="Briefly describe your work details"
					className="max-w-full md:col-span-2"
					onChange={handleInputChange}
					name="description"
					value={experience.description}
				/>
			</div>
			<div
				className="container flex py-2 justify-end
			">
				<Button
					variant="bordered"
					color="primary"
					className="w-40 mr-4"
					onClick={clearData}>
					Clear
				</Button>
				<Button color="primary" className="w-40" oncClick={addExperience}>
					Add
				</Button>
			</div>
		</div>
	);
}
