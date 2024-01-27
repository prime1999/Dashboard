import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const ProgressBars = () => {
	const { toast } = useToast();
	return (
		<div className="w-full rounded-2xl border border-stroke bg-white p-4 dark:border-darkStroke dark:bg-darkBg lg:w-[40%]">
			<div className="w-full font-plus text-lg">
				<div className="flex items-center justify-between mt-4 font-plus text-lg">
					<h4 className="text-[#26282C] dark:text-darkGray font-semibold">
						Top Platform
					</h4>
					<button
						onClick={() => {
							toast({
								title: "",
								description: "No more platforms to sow",
							});
						}}
						className="text-green cursor-pointer font-medium"
					>
						See All
					</button>
				</div>
				<div className="w-full mt-4 mb-8">
					<h4 className="text-[#22242C] font-semibold dark:text-gray">
						Book Bazar
					</h4>
					<div className="w-full h-4 bg-gray rounded-[40px] my-2 dark:bg-darkGray">
						<div className="w-[15%] h-full bg-purple rounded-[40px]"></div>
					</div>
					<div className="flex items-center justify-between text-[#525252] font-normal">
						<p>$2,500,000</p>
						<p>+15%</p>
					</div>
				</div>
				<div className="w-full my-8">
					<h4 className="text-[#22242C] font-semibold dark:text-gray">
						Artisan Aisle
					</h4>
					<div className="w-full h-4 bg-gray rounded-[40px] my-2 dark:bg-darkGray">
						<div className="w-[10%] h-full bg-lightBlue rounded-[40px]"></div>
					</div>
					<div className="flex items-center justify-between text-[#525252] font-normal">
						<p>$1,800,000</p>
						<p>+10%</p>
					</div>
				</div>
				<div className="w-full my-8">
					<h4 className="text-[#22242C] font-semibold dark:text-gray">
						Toy Troop
					</h4>
					<div className="w-full h-4 bg-gray rounded-[40px] my-2 dark:bg-darkGray">
						<div className="w-[8%] h-full bg-orange rounded-[40px]"></div>
					</div>
					<div className="flex items-center justify-between text-[#525252] font-normal">
						<p>$1,200,000</p>
						<p>+8%</p>
					</div>
				</div>
			</div>
			<Toaster />
		</div>
	);
};

export default ProgressBars;
