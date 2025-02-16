import AmountCards from "@/components/dashboard/AmountCards"
import Charts from "@/components/dashboard/charts/Charts"
import SavingCard from "@/components/dashboard/savings/SavingCard"
import {TransactionTable} from "@/components/dashboard/transactionTable/TransactionTable"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import {  PlusIcon } from "lucide-react"


function DashBoard() {
    return (
      // Conteneur principal - définit la structure globale
      <div className="min-h-screen  p-4 md:p-8">



        {/* Section header */}

        <AnimatePresence>
        <motion.header
         initial={{opacity : 0}}
         animate={{opacity : 100}}
         exit={{opacity : 0}}
         transition={{duration : 2}}
        className="mb-32">


          <div className="flex justify-between items-center group">


            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/nilsw13.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="text-blue-300/60 group-hover:text-blue-300 md:text-3xl font-bold text-xs transition-all">Dashboard</h1>
            </div>

          <a href="" className="">
            <Button className="p-4  w-10 h-10 bg-blue-500/20  hover:bg-blue-500/30 cursor-pointer   rounded-full ">
              <PlusIcon className="text-blue-500" />
            </Button>
            </a>
          </div>



        </motion.header>
        </AnimatePresence>



  
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