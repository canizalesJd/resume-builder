import Header from "./components/Header";
import Form from "./components/Form";
export default function App() {
	return (
		<>
			<Header />
			<div className="container mx-auto min-w-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<div className="px-10 py-5 container mx-auto w-full lg:w-11/12">
						<Form />
					</div>
					<div className="bg-gray-200 p-4"></div>
				</div>
			</div>
		</>
	);
}
