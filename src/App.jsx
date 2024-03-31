import Header from "./components/Header";
import Form from "./components/Form";
export default function App() {
	return (
		<>
			<Header />
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="bg-gray-200 p-4">
						<Form />
					</div>
					<div className="bg-gray-200 p-4"></div>
				</div>
			</div>
		</>
	);
}
