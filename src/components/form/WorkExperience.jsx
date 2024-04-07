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
import { PenIcon } from "../icons/PenIcon";

export default function WorkExperience({ onDataChange }) {
	const [editId, setEditId] = useState(null);
	const [editMode, setEditMode] = useState(false);
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
	};

	const handleShowForm = () => {
		setShowForm(!showForm);
	};

	const clearForm = () => {
		setExperience({
			uuid: uuid(),
			companyName: "",
			title: "",
			startDate: "",
			endDate: "",
			description: "",
			visible: true,
		});
		setShowForm(false);
		setEditId(null);
	};

	const addExperience = () => {
		if (editMode && editId) {
			const updatedExperienceList = experienceList.map((exp) =>
				exp.uuid === editId ? experience : exp
			);
			setExperienceList(updatedExperienceList);
			onDataChange("experienceList", updatedExperienceList);
		} else {
			setExperienceList([...experienceList, experience]);
			onDataChange("experienceList", [...experienceList, experience]);
		}
		clearForm();
		setEditMode(false);
	};

	const handleDelete = (uuid) => {
		const updatedExperienceList = experienceList.filter(
			(experience) => experience.uuid !== uuid
		);
		setExperienceList(updatedExperienceList);
		onDataChange("experienceList", updatedExperienceList);
	};

	const handleHideExperience = (uuid) => {
		const updatedExperienceList = experienceList.map((experience) => {
			if (experience.uuid === uuid) {
				return {
					...experience,
					visible: !experience.visible,
				};
			}
			return experience;
		});
		setExperienceList(updatedExperienceList);
		onDataChange("experienceList", updatedExperienceList);
	};

	const handleEdit = (uuid) => {
		const filteredExperience = experienceList.find(
			(experience) => experience.uuid === uuid
		);
		setExperience(filteredExperience);
		setShowForm(true);
		setEditMode(true);
		setEditId(uuid);
	};

	const handleCancel = () => {
		setShowForm(false);
		setEditMode(false);
		clearForm();
	};

	return (
		<div className="container mx-auto pb-3">
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
							onClick={handleCancel}>
							Cancel
						</Button>
						<Button color="primary" className="w-40" onClick={addExperience}>
							{editMode ? "Update" : "Save"}
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
												<EyeIcon
													className="text-2xl text-foreground-400 hover:text-foreground-600"
													onClick={() => {
														handleHideExperience(experience.uuid);
													}}
												/>
											) : (
												<EyeOffIcon
													className="text-2xl text-foreground-400 hover:text-foreground-600"
													onClick={() => {
														handleHideExperience(experience.uuid);
													}}
												/>
											)}
											<PenIcon
												className="text-2xl text-foreground-400 ml-2 hover:text-foreground-600"
												onClick={() => {
													handleEdit(experience.uuid);
												}}
											/>
											<TrashIcon
												className="text-2xl text-foreground-400 ml-2 hover:text-red-400"
												onClick={() => {
													handleDelete(experience.uuid);
												}}
											/>
										</div>
									}>
									{experience.companyName + " - " + experience.title}
								</ListboxItem>
							))}
						</Listbox>
					</ListboxWrapper>
				</div>
			)}
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
