import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ChartContainerComponent() {
  const chartData = [
    { month: "January", incomes: 186, expenses: 80 },
    { month: "February", incomes: 305, expenses: 200 },
    { month: "March", incomes: 237, expenses: 120 },
    { month: "April", incomes: 73, expenses: 190 },
    { month: "May", incomes: 209, expenses: 130 },
    { month: "June", incomes: 214, expenses: 140 },
  ];

  const chartConfig = {
    incomes: {
      label: "incomes",
      color: "var(--success-chart)",
    },
    expenses: {
      label: "expenses",
      color: "var(--destructive-chart)",
    },
  } satisfies ChartConfig;

  return (
    <>
      <ChartContainer
        config={chartConfig}
        className=" max-w-[100%] h-[180px]  max-h-[620px] mx-auto  rounded-md "
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <ChartLegend
            className="text-blue-300/60 group-hover:text-blue-300 transition-all h-full"
            content={<ChartLegendContent />}
          />
          <Bar dataKey="incomes" fill="var(--color-incomes)" radius={4} />
          <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
        </BarChart>
      </ChartContainer>
    </>
  );
}

export default ChartContainerComponent;
