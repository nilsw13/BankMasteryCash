import AmountCards from "@/components/dashboard/AmountCards"
import Charts from "@/components/dashboard/charts/Charts"
import DataCard from "@/components/dashboard/DataCard"
import DashboardHeader from "@/components/dashboard/header/DashboardHeader"
import SavingCard from "@/components/dashboard/savings/SavingCard"
import {TransactionTable} from "@/components/dashboard/table/TransactionTable"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"


function DashBoard() {
    return (
      // Conteneur principal - définit la structure globale
      <div className="min-h-screen  p-4 md:p-8">



        {/* Section header */}
        <header className="mb-32">


          <div className="flex justify-between items-center">


            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="text-white md:text-3xl font-bold text-xs">Dashboard</h1>
            </div>


            <Button className="bg-white hover:bg-white/90 text-black">
              Add transaction
            </Button>
          </div>



        </header>




  
        {/* Section Cartes de montants */}
        <section className="mb-8 ">
          <div >
            <AmountCards />
          </div>
        </section>
  
        {/* Section Graphiques */}
        <section className="mb-8 ">
          <div className=" grid grid-cols-1 md:grid md:grid-cols-18 gap-4">

            <div className="md:col-span-8 ">
            <Charts />
            </div>

            <div className="md:col-span-5 h-[100%] ">
            <TransactionTable />
            </div>

            <div className="md:col-span-5 h-[100%]">
                <SavingCard/>
            </div>
          </div>
        </section>
      </div>
    );
  }

export default DashBoard