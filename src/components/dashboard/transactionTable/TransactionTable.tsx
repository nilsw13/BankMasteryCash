import { Button } from "@/components/ui/button"
import { Card, CardContent,CardHeader, CardTitle } from "@/components/ui/card"

import { AnimatePresence , motion} from "framer-motion"
import { ArrowBigRight, ArrowDown, ArrowLeftRight, ArrowUp,ArrowUpDown,CreditCard, Landmark, } from "lucide-react"
import FilterToggles from "./FilterToggles"
  
  const invoices = [
    {
      id:1,
      date: new Date(),
      title: "Salaires",
      totalAmount: "+ $2150.00",
      paymentMethod: "Credit Card",
    },
    {
      id:1,
      date: new Date(),
      title: "Courses",
      totalAmount: "- $150.00",
      paymentMethod: "Credit Card",
    },
    {
      id:1,
      date: new Date(),
      title: "Ads",
      totalAmount: "-$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      id:1,
      date: new Date(),
      title: "Vinted",
      totalAmount: "+ $450.00",
      paymentMethod: "Credit Card",
    },

  ]
  
  export function TransactionTable() {
    return (
      


      <AnimatePresence>

      <motion.div className="h-full"
         initial={{opacity : 0}}
         animate={{opacity : 100}}
         exit={{opacity : 0}}
         transition={{duration : 2, delay:1}}
      >
      <Card className="bg-transparent border-white/20 h-full">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-100/90">
                    
                   <div className="flex justify-between"> 
                    <h3>Recent transactions</h3>
                    <div className="">

                    <FilterToggles/>

                    </div>
                    </div>


                    <div className="mt-20 flex items-center justify-center text-2xl text-center gap-2 ">
                        
                        <ArrowLeftRight className="text-blue-300 hover:text-blue-400 transition-all"/>  
                        <p></p>
                        </div>
                    
                    
                    </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">

                


                
                
                <div className="w-full grid text-white border-2 border-white/20 gap-4 items-center p-3 text-center rounded-sm mx-auto  mb-6">




                    {invoices.map((inv) => (
                      <div className="grid h-full w-full border text-start p-2 rounded-sm bg-blue-900/20  hover:bg-blue-900/40  border-white/20 ">

                          <div className="flex justify-between items-center">
                            <a href="" className="font-bold flex items-center gap-2 text-black">
                              {inv.totalAmount.startsWith('+') ? (

                                  <div className="bg-green-500/30  rounded-full p-2">
                                  <ArrowUp className="text-green-600"/>
                                  </div>

                              ) : (

                                <div className="bg-destructive/20 text-blue-500 rounded-full p-2">
                                  <ArrowDown className="text-destructive"/>
                                  </div>
                              )
                              
                              }
                            </a>
                              
                              <div className="flex flex-wrap items-center gap-2 ">
                               {
                                inv.paymentMethod.startsWith("Cr")  ? (
                                  <CreditCard className="text-blue-400/60 "/>
                                ) : (
                                  <Landmark className="text-blue-400/60 "/>
                                )
                               } 
                              <p className="font-bold text-blue-500/60 text-xs md:text-sm items-center align-middle">{inv.title}</p>
                              </div>

                              <p className={`${inv.totalAmount.startsWith('-')  ? 'text-red-500' : 'text-green-500'} font-bold`}>{inv.totalAmount} €</p>                      
                              
                          </div>


                      </div>
                    ))}


                        


              



            
                        
                </div>
        <a href="" className="mt-10 ">
          <Button className="border mx-auto p-6  w-full bg-blue-900/20  hover:bg-blue-900/40 transition-all  border-white/20 text-blue-600">
            See more
          </Button>
        </a>
        </CardContent>
        </Card>
        </motion.div>
        </AnimatePresence>
    )
  }
  