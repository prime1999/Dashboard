import { BrowserRouter as Router } from "react-router-dom";
//layouts components
import SideBar from "@/layouts/SideBar";
import Dashboard from "@/components/Dashboard";

function App() {
	// for light mode
	const lightMode = () => {
		if (document.documentElement.classList.contains("dark")) {
			//remove class=dark in html element
			document.documentElement.classList.remove("dark");
		} else {
			return;
		}
	};
	// for dark mode
	const darkMode = () => {
		if (!document.documentElement.classList.contains("dark")) {
			//add class=dark in html element
			document.documentElement.classList.add("dark");
		} else {
			return;
		}
	};

	return (
		<>
			<Router>
				<div className="flex font-inter">
					<div className="hidden sticky lg:flex">
						<SideBar handleLight={lightMode} handleDark={darkMode} />
					</div>
					<div className="w-full h-screen overflow-auto">
						<Dashboard handleLight={lightMode} handleDark={darkMode} />
					</div>
				</div>
			</Router>
		</>
	);
}

export default App;
