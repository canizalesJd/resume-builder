import { Input, Button } from "@nextui-org/react";
import { PlusIcon } from "../icons/PlusIcon";

export default function Skills() {
	return (
		<div className="container mx-auto py-3">
			<h3 className="font-semibold text-lg mb-3">Skills</h3>
			<div className="grid grid-cols-3 gap-4 items-center">
				<Input
					isClearable
					isRequired
					type="text"
					label="Skill description"
					className="max-w-full col-span-2"
				/>
				<Button isIconOnly color="primary" aria-label="Like">
					<PlusIcon />
				</Button>
			</div>
		</div>
	);
}
