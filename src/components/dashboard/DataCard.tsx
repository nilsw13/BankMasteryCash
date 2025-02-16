import { DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"


interface DataCardProps {
    title: string,
    amount?: number | null,
    stats?: string | undefined,

}

function DataCard({ title, amount, stats }: DataCardProps) {
  return (
    <div>

            <Card className=" min-w-[250px] md:w-[380px] lg:w-[99%]  rounded-sm bg-transparent transition-all hover:bg-transparent ">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-white">{title}</CardTitle>
                    <DollarSign className="h-4 w-4 text-blue-500 hover:scale-105 transition-all" />

                </CardHeader>
                <CardContent >
                <p className={`${(amount ?? 0) > 0 && title !== "Expenses" ? 'text-green-500' : 'text-red-500'} font-bold`}>{amount} €</p> 
                <p className="mt-2 text-gray-500">{stats}</p>
                </CardContent>
            </Card>

    </div>
  )
}

export default DataCard