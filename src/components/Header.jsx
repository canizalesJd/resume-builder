import { Navbar, NavbarBrand } from "@nextui-org/react";

const Header = () => {
	return (
		<Navbar
			shouldHideOnScroll
			maxWidth={"full"}
			isBordered
			className="lg:px-10">
			<NavbarBrand>
				<h1 className="font-semibold text-inherit text-gray-800 text-lg">
					<span className="font-black text-primary">Resume</span> Builder
				</h1>
			</NavbarBrand>
		</Navbar>
	);
};

export default Header;
