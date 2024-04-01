import { Input, Textarea, Button } from "@nextui-org/react";
import { LinkIcon } from "../icons/LinkIcon";

export default function Projects() {
	return (
		<div className="container mx-auto py-3">
			<h3 className="font-semibold text-lg mb-3">Projects</h3>
			<div className="grid grid-cols-3 gap-4">
				<Input
					isRequired
					type="text"
					label="Title"
					className="max-w-full"
					placeholder="Weather App"
				/>
				<Input
					type="text"
					label="Subtitle"
					className="max-w-full"
					placeholder="NextJS, NextUI and Supabase"
				/>
				<Input
					type="text"
					label="Project URL"
					placeholder="www.yourproject.com"
					endContent={
						<LinkIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
					}
				/>
				<Textarea
					isRequired
					label="Project Description"
					placeholder="Briefly describe your project details"
					className="max-w-full col-span-3"
				/>
			</div>
			<div
				className="container flex py-3
			">
				<Button variant="bordered" color="primary" className="w-40 mr-4 ">
					Clear
				</Button>
				<Button color="primary" className="w-40 ">
					Add
				</Button>
			</div>
		</div>
	);
}
