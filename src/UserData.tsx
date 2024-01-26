import user1 from "/png/user1.png";
import user2 from "/png/user2.png";
import user3 from "/png/user3.png";
import user4 from "/png/user4.png";
import user5 from "/png/user5.png";

interface User {
	pic: string;
	name: string;
	date: string;
	amount: string;
	status: string;
	invoice?: any;
}

export const users: User[] = [
	{
		name: "Marcus Bergson",
		date: "Nov 15, 2023",
		amount: "80,000",
		status: "Paid",
		pic: user1,
	},
	{
		name: "Jaydon Vaccaro",
		date: "Nov 15, 2023",
		amount: "150,000",
		status: "Refund",
		pic: user2,
	},
	{
		name: "Corey Schleifer",
		date: "Nov 14, 2023",
		amount: "87,000",
		status: "Paid",
		pic: user3,
	},
	{
		name: "Cooper Press",
		date: "Nov 14, 2023",
		amount: "100,000",
		status: "Refund",
		pic: user4,
	},
	{
		name: "Marcus Bergson",
		date: "Nov 13, 2023",
		amount: "78,000",
		status: "Paid",
		pic: user5,
	},
];
