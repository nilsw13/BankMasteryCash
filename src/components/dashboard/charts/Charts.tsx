import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { AnimatePresence, motion } from 'framer-motion'
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

function Charts() {


    const chartData = [
        { month: "January", incomes: 186, expenses: 80 },
        { month: "February", incomes: 305, expenses: 200 },
        { month: "March", incomes: 237, expenses: 120 },
        { month: "April", incomes: 73, expenses: 190 },
        { month: "May", incomes: 209, expenses: 130 },
        { month: "June", incomes: 214, expenses: 140 },
      ]

      const chartConfig = {
        incomes: {
          label: "incomes",
          color: "var(--success-chart)",
        },
        expenses: {
          label: "expenses",
          color: "var(--destructive-chart)",
        },
      } satisfies ChartConfig


  return (

    <AnimatePresence>
    <motion.div 
           initial={{opacity : 0}}
           animate={{opacity : 100}}
           exit={{opacity : 0}}
           transition={{duration : 2, delay: 0.5}}
    >

        <Card className=' bg-transparent border-white/20 border md:h-[655px] ' >
            <CardHeader>
                <CardTitle className='font bold text-xl text-slate-100/90'>Spending / Incomes overview</CardTitle>
                <CardDescription>
                    Showing total of incomes and spending for the last 6 months
                </CardDescription>
            </CardHeader>
            <CardContent>
        <ChartContainer config={chartConfig} className='min-w-[90%] max-w-[100%] h-[300px] mt-20 max-h-[620px] mx-auto  rounded-md p-10'>
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
                    <ChartLegend className='text-white h-full' content={<ChartLegendContent />} />
            <Bar dataKey="incomes" fill="var(--color-incomes)" radius={4} />
            <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>

        </Card>

    </motion.div>
    </AnimatePresence>
  )
}

export default Charts