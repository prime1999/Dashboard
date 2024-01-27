import { MdMenu } from "react-icons/md";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "./SideBar";

type Props = {
	handleLight: any;
	handleDark: any;
};

const MobileSideBar = ({ handleLight, handleDark }: Props) => {
	return (
		<div>
			<Sheet>
				<SheetTrigger>
					<button className="lg:hidden">
						<MdMenu />
					</button>
				</SheetTrigger>
				<SheetContent className="w-[110px] bg-transparent backdrop-blur -ml-4">
					<SideBar handleLight={handleLight} handleDark={handleDark} />
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileSideBar;
