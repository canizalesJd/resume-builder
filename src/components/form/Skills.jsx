import { Input, Button } from "@nextui-org/react";
import { PlusIcon } from "../icons/PlusIcon";

export default function Skills() {
	return (
		<div className="container mx-auto pb-3">
			<div className="grid md:grid-cols-3 grid-cols-2 gap-4 items-center">
				<Input
					isClearable
					isRequired
					type="text"
					label="Skill description"
					className="max-w-full md:col-span-2"
				/>
				<Button isIconOnly color="primary" aria-label="Like">
					<PlusIcon />
				</Button>
			</div>
		</div>
	);
}
