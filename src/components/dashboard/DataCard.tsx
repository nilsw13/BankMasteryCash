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

            <Card className=" min-w-[250px] md:w-[380px] lg:w-[95%]  rounded-sm bg-slate-100/90 transition-all hover:bg-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle>{title}</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />

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