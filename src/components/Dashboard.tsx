import Navbar from "@/layouts/Navbar";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import BarChart from "./BarChart";
import ChartBox from "./ChartBoxes/ChartBox";
import RefundChartBox from "./ChartBoxes/RefundChartBox";
import SalesChartBox from "./ChartBoxes/SalesChartBox";
import IncomeChartBox from "./ChartBoxes/IncomeChartBox";
import UserTable from "./UserTable";
import ProgressBars from "./ProgressBars";

const Dashboard = ({ handleMobileNav, mobile }: any) => {
	return (
		<div className="mb-4">
			<div className="sticky z-50 w-full top-0 left-18 bg-gray border-b border-border">
				<Navbar mobile={mobile} handleMobileNav={handleMobileNav} />
			</div>
			<div className="flex flex-col px-4 mt-4 lg:flex-row">
				<div className="w-full rounded-2xl border border-stroke bg-white p-2 dark:bg-transparent lg:w-[60%]">
					<div className="flex justify-between items-center px-4 mb-4">
						<h4 className="font-[600] font-plus">Sales Trend</h4>
						<div className="flex items-center">
							<p className="font-plus font-[500] text-md text-[#3A3F51] dark:text-gray">
								Sort by:
							</p>
							<Select>
								<SelectTrigger className="w-32 ml-4 rounded-full bg-transparent font-plus text-[#3A3F51] dark:text-gray">
									<SelectValue placeholder="weekly" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem
										value="weekly"
										className="font-plus text-[#3A3F51]"
									>
										Weekly
									</SelectItem>
									<SelectItem
										value="monthly"
										className="font-plus text-[#3A3F51]"
									>
										Monthly
									</SelectItem>
									<SelectItem
										value="yearly"
										className="font-plus text-[#3A3F51]"
									>
										Yearly
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<BarChart />
				</div>
				<div className="w-full mt-4 lg:w-[40%] lg:ml-4 lg:mt-0">
					<div className="flex flex-col justify-between gap-2 md:flex-row">
						<ChartBox />
						<RefundChartBox />
					</div>
					<div className="flex flex-col justify-between gap-2 md:mt-2 md:flex-row">
						<SalesChartBox />
						<IncomeChartBox />
					</div>
				</div>
			</div>
			<div className="flex flex-col px-4 mt-4 gap-4 lg:flex-row">
				<UserTable />
				<ProgressBars />
			</div>
		</div>
	);
};

export default Dashboard;
