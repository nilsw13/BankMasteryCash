import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatePresence, motion } from "framer-motion"
import { Building, DollarSign, EuroIcon, HandCoins, HandMetalIcon, PiggyBank, PlusIcon, TreePine, Wallet, Wallet2 } from "lucide-react"


function SavingCard() {
  return (


    <AnimatePresence>
    <motion.div
          initial={{opacity : 0}}
          animate={{opacity : 100}}
          exit={{opacity : 0}}
          transition={{duration : 2, delay:1.5}}
    >

        <Card className="bg-transparent h-full">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                    
                   <div className="flex justify-between"> 
                    <h3>Savings</h3>
                    <a href="">
                        <PlusIcon className="w-8 h-8 border-2 rounded-sm p-1 bg-slate-100/90 transition-all hover:bg-white text-blue-600"/>
                    </a>
                    </div>

                    <div className="mt-20 flex items-center justify-center text-2xl text-center gap-2 ">
                        
                        <Wallet2 className="text-blue-300 hover:text-blue-400 transition-all "/>  
                        
                        </div>
                    
                    </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">

                


                
                
                <div className="w-full grid text-white border-2 border-white/70 gap-4 items-center p-3 text-center rounded-sm mx-auto  mb-6">


                        <div className="grid h-full w-full border text-start p-1 rounded-sm bg-slate-100/90 transition-all hover:bg-white" >


                                <div className="flex justify-between items-center ">
                                <a href="" className="font-bold flex items-center gap-2 text-black">
                                    <DollarSign className="border-2 rounded-full h-12 w-12 p-2 bg-slate-900/90 text-white"/>
                                    Green Investment
                                </a>
                                <p className="font-bold text-sm whitespace-nowrap text-green-500">5000 €</p>

                                </div>
                            
                                <p className="text-stone-900/60 ml-14 text-xs">Taux 0.75%</p>

                            </div>

                        <div className="grid h-full w-full border text-start p-1 rounded-sm bg-slate-100/90 transition-all hover:bg-white" >


                            <div className="flex justify-between items-center ">
                            <a href="" className="font-bold flex items-center gap-2 text-black">
                                <PiggyBank className="border-2 rounded-full h-12 w-12 p-2 bg-slate-900/90 text-white"/>
                                Green Investment
                            </a>
                            <p className="font-bold text-sm whitespace-nowrap text-green-500">5000 €</p>

                            </div>
                        
                            <p className="text-stone-900/60 ml-14 text-xs">Taux 0.75%</p>

                        </div>


                        <div className="grid h-full w-full border text-start p-1 rounded-sm bg-slate-100/90 transition-all hover:bg-white" >


                            <div className="flex justify-between items-center ">
                            <a href="" className="font-bold flex items-center gap-2 text-black">
                                <Wallet className="border-2 rounded-full h-12 w-12 p-2 bg-slate-900/90 text-white"/>
                                Green Investment
                            </a>
                            <p className="font-bold text-sm whitespace-nowrap text-green-500">5000 €</p>

                            </div>
                        
                        <p className="text-stone-900/60 ml-14 text-xs">Taux 0.75%</p>

                        </div>


                        <div className="grid h-full w-full border text-start p-1 rounded-sm bg-slate-100/90 transition-all hover:bg-white" >

                            <div className="flex justify-between items-center ">
                            <a href="" className="font-bold flex items-center gap-2 text-black">
                                <Building className="border-2 rounded-full h-12 w-12 p-2 bg-slate-900/90 text-white"/>
                                Green Investment
                            </a>
                            <p className="font-bold text-sm whitespace-nowrap text-green-500">5000 €</p>

                            </div>
                        
                            <p className="text-stone-900/60 ml-14 text-xs">Taux 0.75%</p>

                        </div>



            
                        
                </div>
            </CardContent>
        </Card>

    </motion.div>
    </AnimatePresence>
  )
}

export default SavingCard