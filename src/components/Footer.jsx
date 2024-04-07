import { Link, Button } from "@nextui-org/react";
import { GithubIcon } from "./icons/IconExports";
const Footer = () => {
	return (
		<footer className="mx-auto border">
			<div className="container mx-auto py-5 flex flex-col justify-center items-center text-foreground-500 ">
				<div>
					Developed by
					<Link
						className="mx-2"
						color="primary"
						isExternal
						href="https://github.com/canizalesJd"
						target="_blank">
						Jose Canizales
					</Link>
				</div>
				<div>
					Code available at
					<Link
						href="https://github.com/canizalesJd/resume-builder"
						target="_blank">
						<Button
							isIconOnly
							variant="primary"
							aria-label="Github"
							className="text-2xl text-black">
							<GithubIcon />
						</Button>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
