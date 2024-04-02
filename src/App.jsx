import Header from "./components/Header";
import Form from "./components/Form";
import PDFTemplate from "./components/PDFTemplate";

export default function App() {
	return (
		<>
			<Header />

			<div className="container mx-auto min-w-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-screen">
					<div className="py-5 container mx-auto w-full lg:w-11/12">
						<Form />
					</div>
					<div className="bg-gray-200 p-4 min-h-full">
						<PDFTemplate />
					</div>
				</div>
			</div>
		</>
	);
}
