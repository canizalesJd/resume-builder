import { useState } from "react";
import uuid from "react-uuid";
import { Input, Button, Listbox, ListboxItem } from "@nextui-org/react";
import { PlusIcon, TrashIcon } from "../icons/IconExports";
import { ListboxWrapper } from "../ui/ListboxWrapper";

const Skills = ({ onDataChange }) => {
	const [skill, setSkill] = useState({
		uuid: uuid(),
		skillName: "",
		visible: true,
	});

	const [skillsList, setSkillsList] = useState([]);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		const updatedExperience = {
			...skill,
			[name]: value,
			uuid: uuid(),
		};
		setSkill(updatedExperience);
	};

	const addSkill = () => {
		onDataChange("skillsList", skillsList);
		setSkillsList([...skillsList, skill]);
		setSkill({
			uuid: uuid(),
			skillName: "",
		});
	};

	const handleDelete = (uuid) => {
		const updatedSkillsList = skillsList.filter((skill) => skill.uuid !== uuid);
		setSkillsList(updatedSkillsList);
		onDataChange("skillsList", updatedSkillsList);
	};

	return (
		<div className="container mx-auto pb-3">
			<div className="grid md:grid-cols-3 grid-cols-2 gap-4 items-center">
				<Input
					isClearable
					isRequired
					type="text"
					label="Skill description"
					className="max-w-full md:col-span-2"
					onChange={handleInputChange}
					name="skillName"
					value={skill.skillName}
				/>
				<Button isIconOnly color="primary" aria-label="Like" onClick={addSkill}>
					<PlusIcon />
				</Button>
			</div>
			{skillsList.length > 0 && (
				<div className="mt-5 max-w-md">
					<ListboxWrapper>
						<Listbox
							aria-label="Work Experience"
							variant="bordered"
							itemClasses={{ title: "text-md" }}>
							{skillsList.map((skill) => (
								<ListboxItem
									key={skill.uuid}
									endContent={
										<div className="flex justify-between">
											<TrashIcon
												className="text-2xl text-foreground-400 ml-2 hover:text-red-400"
												onClick={() => {
													handleDelete(skill.uuid);
												}}
											/>
										</div>
									}>
									{skill.skillName}
								</ListboxItem>
							))}
						</Listbox>
					</ListboxWrapper>
				</div>
			)}
		</div>
	);
};
export default Skills;
