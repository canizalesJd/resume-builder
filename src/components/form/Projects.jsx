import { useState } from "react";
import uuid from "react-uuid";
import {
	Input,
	Textarea,
	Button,
	Listbox,
	ListboxItem,
} from "@nextui-org/react";
import {
	LinkIcon,
	EyeOffIcon,
	EyeIcon,
	TrashIcon,
	PlusIcon,
	PenIcon,
} from "../icons/IconExports";
import { ListboxWrapper } from "../ui/ListboxWrapper";

const Projects = ({ onDataChange }) => {
	const [editId, setEditId] = useState(null);
	const [editMode, setEditMode] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const [projectList, setProjectList] = useState([]);
	const [project, setProject] = useState({
		uuid: uuid(),
		title: "",
		subTitle: "",
		url: "",
		description: "",
		visible: true,
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		const udpdatedProject = {
			...project,
			[name]: value,
			uuid: uuid(),
		};
		setProject(udpdatedProject);
	};

	const clearForm = () => {
		setProject({
			uuid: uuid(),
			title: "",
			subTitle: "",
			url: "",
			description: "",
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

	const addProject = () => {
		if (editMode && editId) {
			const updatedProjectList = projectList.map((edu) =>
				edu.uuid === editId ? project : edu
			);
			setProjectList(updatedProjectList);
			onDataChange("projectList", updatedProjectList);
		} else {
			setProjectList([...projectList, project]);
			onDataChange("projectList", [...projectList, project]);
		}
		setEditMode(false);
		clearForm();
	};

	const handleDelete = (uuid) => {
		const updatedProjectList = projectList.filter(
			(project) => project.uuid !== uuid
		);
		setProjectList(updatedProjectList);
		onDataChange("projectList", updatedProjectList);
	};

	const handleEdit = (uuid) => {
		const filteredProject = projectList.find(
			(project) => project.uuid === uuid
		);
		setProject(filteredProject);
		setShowForm(true);
		setEditMode(true);
		setEditId(uuid);
	};

	const handleHideProject = (uuid) => {
		const updatedProjectList = projectList.map((project) => {
			if (project.uuid === uuid) {
				return {
					...project,
					visible: !project.visible,
				};
			}
			return project;
		});
		setProjectList(updatedProjectList);
		onDataChange("projectList", updatedProjectList);
	};

	return (
		<div className="container mx-auto pb-3">
			{showForm && (
				<div className="grid md:grid-cols-3 grid-cols-1 gap-4">
					<Input
						isRequired
						type="text"
						label="Title"
						className="max-w-full"
						placeholder="Weather App"
						name="title"
						onChange={handleInputChange}
						value={project.title}
					/>
					<Input
						type="text"
						label="Subtitle"
						className="max-w-full"
						placeholder="NextJS, NextUI and Supabase"
						name="subTitle"
						onChange={handleInputChange}
						value={project.subTitle}
					/>
					<Input
						type="text"
						label="Project URL"
						placeholder="www.yourproject.com"
						endContent={
							<LinkIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
						}
						name="url"
						onChange={handleInputChange}
						value={project.url}
					/>
					<Textarea
						isRequired
						label="Project Description"
						placeholder="Briefly describe your project details"
						className="max-w-full md:col-span-3"
						name="description"
						onChange={handleInputChange}
						value={project.description}
					/>
					<div className="container flex py-3">
						<Button
							variant="bordered"
							color="primary"
							className="w-40 mr-4"
							onClick={handleCancel}>
							Cancel
						</Button>
						<Button color="primary" className="w-40" onClick={addProject}>
							Save
						</Button>
					</div>
				</div>
			)}
			{projectList.length > 0 && showForm == false && (
				<div>
					<ListboxWrapper>
						<Listbox
							aria-label="Projects"
							variant="bordered"
							itemClasses={{ title: "text-md" }}>
							{projectList.map((project) => (
								<ListboxItem
									key={project.uuid}
									endContent={
										<div className="flex justify-between">
											{project.visible ? (
												<EyeIcon
													className="text-2xl text-foreground-400 hover:text-foreground-600"
													onClick={() => {
														handleHideProject(project.uuid);
													}}
												/>
											) : (
												<EyeOffIcon
													className="text-2xl text-foreground-400 hover:text-foreground-600"
													onClick={() => {
														handleHideProject(project.uuid);
													}}
												/>
											)}
											<PenIcon
												className="text-2xl text-foreground-400 ml-2 hover:text-foreground-600"
												onClick={() => {
													handleEdit(project.uuid);
												}}
											/>
											<TrashIcon
												className="text-2xl text-foreground-400 ml-2 hover:text-red-400"
												onClick={() => {
													handleDelete(project.uuid);
												}}
											/>
										</div>
									}>
									{project.title + " - " + project.subTitle}
								</ListboxItem>
							))}
						</Listbox>
					</ListboxWrapper>
				</div>
			)}
			{!showForm && (
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
export default Projects;
