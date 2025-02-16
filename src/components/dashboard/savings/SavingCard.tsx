import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatePresence, motion } from "framer-motion"
import { Building, ComputerIcon, PiggyBank, PlusIcon, TreePine,  Wallet2 } from "lucide-react"


function SavingCard() {
    const savingCounts = [

            {
                id: 1,
                icons : <TreePine className="border-2  rounded-full h-12 w-12 p-2 bg-blue-900/20  hover:bg-blue-900/20  border-white/20 text-blue-600 group-hover:text-blue-300"/ >,
                title:"Green investment",
                taux : 0.75,
                amount: 6000
            }, 

            {
                id: 2,
                icons : <PiggyBank className="border-2  rounded-full h-12 w-12 p-2 bg-blue-900/20  hover:bg-blue-900/20  border-white/20 text-blue-600 group-hover:text-blue-300"/>,
                title:"Daily savings",
                taux : 0.75,
                amount: 1653
            },


            {
                id: 3,
                icons : <ComputerIcon className="border-2  rounded-full h-12 w-12 p-2 bg-blue-900/20  hover:bg-blue-900/20  border-white/20 text-blue-600 group-hover:text-blue-300"/>,
                title:"Techs assets",
                taux : 4,
                amount: 32000
            },

            {
                id: 4,
                icons : <Building className="border-2  rounded-full h-12 w-12 p-2 bg-blue-900/20  hover:bg-blue-900/20  border-white/20 text-blue-600 group-hover:text-blue-300"/>,
                title:"Real Estate",
                taux : 6.75,
                amount: 6350
            },



    ]
  
    return (



    


    <AnimatePresence>
    <motion.div
          initial={{opacity : 0}}
          animate={{opacity : 100}}
          exit={{opacity : 0}}
          transition={{duration : 2, delay:1.5}}
    >

        <Card className="bg-transparent border-white/20 h-full :">
                <CardHeader className="group">
                            <CardTitle className="font bold text-xl text-blue-300/60 group-hover:text-blue-300 transition-all">
                                
                            <div className="flex justify-between"> 
                                <h3>Savings</h3>
                                <a href="">
                                    <PlusIcon className="w-8 h-8 border-2 rounded-sm p-1 bg-blue-900/20  hover:bg-blue-900/20  border-white/20 text-blue-600"/>
                                </a>
                                </div>

                                
                                </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col mt-10">
                        <div className="w-full grid text-white border-white/20 border gap-4 items-center p-3 text-center rounded-sm mx-auto  mb-6">
                            {savingCounts.map((acc)=> (
                                <div className="grid h-full w-full border text-start p-1 rounded-sm bg-blue-900/20  hover:bg-blue-900/40  border-white/20 group" >

                                <div key={acc.id} className="flex justify-between items-center ">
                                <a href="" className="font-bold flex items-center gap-2 text-blue-400/60 group-hover:text-blue-300 transition-all">
                                    <div className="border-transparent  pl-2  pt-2 pb-1 ">{acc.icons}</div>
                                    {acc.title}
                                </a>
                                <p className="font-bold pr-2 text-md whitespace-nowrap text-green-500/60 group-hover:text-green-500">{acc.amount} $</p>

                                </div>
                            
                                <p className="text-blue-400/60 ml-16 text-xs">{acc.taux} %</p>

                            </div>
                            ))}
                        </div>
                </CardContent>
        </Card>

    </motion.div>
    </AnimatePresence>
  )
}


export default SavingCard