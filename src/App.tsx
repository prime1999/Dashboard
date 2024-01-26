import { BrowserRouter as Router } from "react-router-dom";
//layouts components
import SideBar from "@/layouts/SideBar";
import Dashboard from "@/components/Dashboard";
import { useState } from "react";

function App() {
	const [mobile, setMobile] = useState<boolean>(false);
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

	const handleMobileNav = () => {
		setMobile(!mobile);
	};

	return (
		<>
			<Router>
				<div className="flex font-inter">
					<div className="sticky">
						<SideBar
							mobile={mobile}
							handleLight={lightMode}
							handleDark={darkMode}
						/>
					</div>
					<div className="w-full h-screen overflow-auto">
						<Dashboard mobile={mobile} handleMobileNav={handleMobileNav} />
					</div>
				</div>
			</Router>
		</>
	);
}

export default App;
