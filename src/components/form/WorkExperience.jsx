import { useState } from "react";
import uuid from "react-uuid";
import {
	Input,
	Textarea,
	Button,
	Listbox,
	ListboxItem,
} from "@nextui-org/react";
import { ListboxWrapper } from "../ui/ListboxWrapper";
import { EyeOffIcon, EyeIcon, TrashIcon, PlusIcon } from "../icons/IconExports";

export default function WorkExperience({ onDataChange }) {
	const [showForm, setShowForm] = useState(false);
	const [experienceList, setExperienceList] = useState([]);
	const [experience, setExperience] = useState({
		uuid: uuid(),
		companyName: "",
		title: "",
		startDate: "",
		endDate: "",
		description: "",
		visible: true,
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		const updatedExperience = {
			...experience,
			[name]: value,
			uuid: uuid(),
		};
		setExperience(updatedExperience);
		onDataChange("experience", updatedExperience);
	};

	const handleShowForm = () => {
		setShowForm(!showForm);
	};

	const clearData = () => {
		setExperience({
			uuid: uuid(),
			companyName: "",
			title: "",
			startDate: "",
			endDate: "",
			description: "",
			visible: true,
		});
		onDataChange("experience", {});
		setShowForm(false);
	};

	const addExperience = () => {
		onDataChange("experience", experience);
		setExperienceList([...experienceList, experience]);
		clearData();
	};

	return (
		<div className="container mx-auto pb-3">
			{/* show form if showForm is true */}
			{showForm && (
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
					<div className="container flex">
						<Button
							variant="bordered"
							color="primary"
							className="w-40 mr-4"
							onClick={handleShowForm}>
							Cancel
						</Button>
						<Button color="primary" className="w-40" onClick={addExperience}>
							Save
						</Button>
					</div>
				</div>
			)}

			{experienceList.length > 0 && showForm == false && (
				<div>
					<ListboxWrapper>
						<Listbox
							aria-label="Work Experience"
							variant="bordered"
							itemClasses={{ title: "text-md" }}>
							{experienceList.map((experience) => (
								<ListboxItem
									key={experience.uuid}
									endContent={
										<div className="flex justify-between">
											{experience.visible ? (
												<EyeIcon className="text-2xl text-foreground-400 hover:text-foreground-600" />
											) : (
												<EyeOffIcon className="text-2xl text-foreground-400 hover:text-foreground-600" />
											)}
											<TrashIcon className="text-2xl text-foreground-400 ml-2 hover:text-red-400" />
										</div>
									}>
									{experience.companyName + " - " + experience.title}
								</ListboxItem>
							))}
						</Listbox>
					</ListboxWrapper>
				</div>
			)}
			{/* show button if showForm is false */}
			{showForm === false && (
				<div className="flex justify-center pt-3">
					<Button
						variant="ghost"
						size="md"
						endContent={<PlusIcon className="text-foreground-400" />}
						onClick={handleShowForm}>
						Add new
					</Button>
				</div>
			)}
		</div>
	);
}
