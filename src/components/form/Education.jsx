import { useState } from "react";
import uuid from "react-uuid";
import { Input, Button, Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "../ui/ListboxWrapper";
import {
	EyeOffIcon,
	EyeIcon,
	TrashIcon,
	PlusIcon,
	PenIcon,
} from "../icons/IconExports";

const Education = ({ onDataChange }) => {
	const [editId, setEditId] = useState(null);
	const [editMode, setEditMode] = useState(null);
	const [showForm, setShowForm] = useState(false);
	const [educationList, setEducationList] = useState([]);
	const [education, setEducation] = useState({
		uuid: uuid(),
		schoolName: "",
		degree: "",
		startDate: "",
		endDate: "",
		visible: true,
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		const udpdatedEducation = {
			...education,
			[name]: value,
			uuid: uuid(),
		};
		setEducation(udpdatedEducation);
	};

	const clearForm = () => {
		setEducation({
			uuid: uuid(),
			schoolName: "",
			degree: "",
			startDate: "",
			endDate: "",
			visible: true,
		});
		setShowForm(false);
		setEditMode(null);
		setEditId(null);
	};

	const handleCancel = () => {
		setShowForm(false);
		setEditMode(false);
		setEditId(null);
		clearForm();
	};

	const handleShowForm = () => {
		setShowForm(!showForm);
	};

	const addEducation = () => {
		if (editMode && editId) {
			const updatedEducationList = educationList.map((edu) =>
				edu.uuid === editId ? education : edu
			);
			setEducationList(updatedEducationList);
			onDataChange("educationList", updatedEducationList);
		} else {
			setEducationList([...educationList, education]);
			onDataChange("educationList", [...educationList, education]);
		}
		setEditMode(false);
		clearForm();
	};

	const handleDelete = (uuid) => {
		const updatedEducationList = educationList.filter(
			(education) => education.uuid !== uuid
		);
		setEducationList(updatedEducationList);
		onDataChange("educationList", updatedEducationList);
	};

	const handleEdit = (uuid) => {
		const filteredEducation = educationList.find(
			(education) => education.uuid === uuid
		);
		setEducation(filteredEducation);
		setShowForm(true);
		setEditMode(true);
		setEditId(uuid);
	};

	const handleHideEducation = (uuid) => {
		const updatedEducationList = educationList.map((education) => {
			if (education.uuid === uuid) {
				return {
					...education,
					visible: !education.visible,
				};
			}
			return education;
		});
		setEducationList(updatedEducationList);
		onDataChange("educationList", updatedEducationList);
	};

	return (
		<div className="container mx-auto pb-3">
			{showForm && (
				<div className="grid  md:grid-cols-2 grid-cols-1 gap-4">
					<Input
						type="text"
						label="School Name"
						className="max-w-full"
						isRequired
						placeholder="Harvard"
						onChange={handleInputChange}
						name="schoolName"
						value={education.schoolName}
					/>
					<Input
						type="text"
						label="Degree"
						className="max-w-full"
						isRequired
						placeholder="Computer Science"
						onChange={handleInputChange}
						name="degree"
						value={education.degree}
					/>
					<Input
						type="date"
						label="Start Date"
						className="max-w-full"
						isRequired
						onChange={handleInputChange}
						name="startDate"
						value={education.startDate}
					/>
					<Input
						type="date"
						label="End Date"
						className="max-w-full"
						description="Leave empty if still in progress"
						onChange={handleInputChange}
						name="endDate"
						value={education.endDate}
					/>
					<div className="container flex py-1">
						<Button
							variant="bordered"
							color="primary"
							className="w-40 mr-4"
							onClick={handleCancel}>
							Cancel
						</Button>
						<Button color="primary" className="w-40" onClick={addEducation}>
							Save
						</Button>
					</div>
				</div>
			)}
			{educationList.length > 0 && showForm == false && (
				<div>
					<ListboxWrapper>
						<Listbox
							aria-label="Work education"
							variant="bordered"
							itemClasses={{ title: "text-md" }}>
							{educationList.map((education) => (
								<ListboxItem
									key={education.uuid}
									endContent={
										<div className="flex justify-between">
											{education.visible ? (
												<EyeIcon
													className="text-2xl text-foreground-400 hover:text-foreground-600"
													onClick={() => {
														handleHideEducation(education.uuid);
													}}
												/>
											) : (
												<EyeOffIcon
													className="text-2xl text-foreground-400 hover:text-foreground-600"
													onClick={() => {
														handleHideEducation(education.uuid);
													}}
												/>
											)}
											<PenIcon
												className="text-2xl text-foreground-400 ml-2 hover:text-foreground-600"
												onClick={() => {
													handleEdit(education.uuid);
												}}
											/>
											<TrashIcon
												className="text-2xl text-foreground-400 ml-2 hover:text-red-400"
												onClick={() => {
													handleDelete(education.uuid);
												}}
											/>
										</div>
									}>
									{education.degree + " - " + education.schoolName}
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
};
export default Education;
