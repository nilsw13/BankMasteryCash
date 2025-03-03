import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useSavingAccount } from "@/hooks/use-savingAccount"
import { AnimatePresence, motion } from "framer-motion"
import { Building, ComputerIcon, PiggyBank, PlusIcon, TreePine, VaultIcon } from "lucide-react"


function SavingCard() {

    const {savings} = useSavingAccount();

        
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
                            {savings.map((acc)=> (
                                <div className="grid h-full w-full border text-start p-1 rounded-sm bg-blue-900/20  hover:bg-blue-900/40  border-white/20 group" >

                                <div key={acc.id} className="flex justify-between items-center ">
                                <a href="" className="font-bold flex items-center gap-2 text-blue-400/60 group-hover:text-blue-300 transition-all">
                                    <div className="border-transparent  pl-2  pt-2 pb-1 "><VaultIcon className="border-2  rounded-full h-12 w-12 p-2 bg-blue-900/20  hover:bg-blue-900/20  border-white/20 text-blue-600 group-hover:text-blue-300"/></div>
                                    {acc.name}
                                </a>
                                <p className="font-bold pr-2 text-md whitespace-nowrap text-green-500/60 group-hover:text-green-500">{acc.amount} $</p>

                                </div>
                            
                                <p className="text-blue-400/60 ml-16 text-xs">{acc.rate} %</p>

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