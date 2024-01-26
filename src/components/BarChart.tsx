import ReactApexChart from "react-apexcharts";

const BarChart = () => {
	const chartOptions: any = {
		chart: {
			type: "bar",
			height: 200,
		},
		plotOptions: {
			bar: {
				borderRadius: 10,
				borderRadiusApplication: "around",
				horizontal: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		fill: {
			colors: ["#34CAA5"],
			type: "gradient",
			gradient: {
				shade: "light",
				type: "vertical",
				shadeIntensity: 0.9,
				gradientToColors: ["#34CAA51A"], // Specify the gradient colors
				inverseColors: false,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100, 40],
				colorStops: [],
			},
		},

		xaxis: {
			categories: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			],
			labels: {
				style: {
					colors: "#B2ABAB", // Set the text color of X-axis labels
					fontSize: "14px", // Set the font size of X-axis labels
					fontWeight: 600,
				},
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: "#B2ABAB", // Set the text color of X-axis labels
					fontSize: "12px", // Set the font size of X-axis labels
					fontWeight: 600,
				},
			},
		},
		stroke: {
			width: 0, // Set the width of the stroke
		},
		tooltip: {
			custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
				return (
					'<div class="custom-tooltip">' +
					'<span style="color: #c7c7c75; background: #000">' +
					w.globals.labels[dataPointIndex] +
					": $" +
					series[seriesIndex][dataPointIndex] +
					"</span></div>"
				);
			},
		}, // Closing parenthesis was missing here
	};

	const series = [
		{
			data: [
				12000, 22000, 7000, 32000, 18000, 45000, 18000, 33000, 37000, 8000,
				30000, 27000,
			],
		},
	];
	return (
		<div className="font-inter">
			<ReactApexChart
				options={chartOptions}
				series={series}
				type="bar"
				height={350}
			/>
		</div>
	);
};

export default BarChart;
