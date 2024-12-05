import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChartArea, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
export const Analytics = () => {
  return (
    <div className="w-full h-full mt-5">
      <header className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Analytics</h1>
      </header>
      <main className="mt-5 w-full h-full">
        <div className="w-full flex flex-wrap justify-between gap-2">
          <div className="md:basis-[calc(30%-0.5rem)] w-full">
            <ChartCard />
          </div>
          <div className="md:basis-[calc(70%-0.5rem)] w-full">
            <ChartCard />
          </div>
          <div></div>
        </div>
      </main>
    </div>
  );
};

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const ChartCard = () => {
  return (
    <Card className="">
      <CardHeader className="flex flex-row h-[14px] items-center w-full justify-between">
        <div className="flex text-xs gap-1 text-muted-foreground items-center">
          <ChartArea size={16} /> Job Applications
        </div>
        <div className="flex">
          <Button
            variant={"link"}
            size={"sm"}
            className="p-0 text-xs text-muted-foreground"
          >
            More Info
          </Button>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
