import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { AnimatePresence , motion} from "framer-motion"
import { ArrowBigRight, ArrowDown, ArrowLeftRight, ArrowUp, Building, CreditCard, DollarSign, HandCoinsIcon, Landmark, PiggyBank, PlusIcon, Wallet, Wallet2 } from "lucide-react"
  
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
      title: "Netflix",
      totalAmount: "- $450.00",
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
      <Card className="bg-transparent h-full">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-white">
                    
                   <div className="flex justify-between"> 
                    <h3>Recent transactions</h3>
                    <a href="" className="">
                        <ArrowBigRight className=" w-8 h-8 border-2 rounded-sm p-1 bg-slate-100/90 transition-all hover:bg-white text-blue-600"/>
                    </a>
                    </div>


                    <div className="mt-20 flex items-center justify-center text-2xl text-center gap-2 ">
                        
                        <ArrowLeftRight className="text-blue-300 hover:text-blue-400 transition-all"/>  
                        <p></p>
                        </div>
                    
                    
                    </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">

                


                
                
                <div className="w-full grid text-white border-2 border-white/70 gap-4 items-center p-3 text-center rounded-sm mx-auto  mb-6">




                    {invoices.map((inv) => (
                      <div className="grid h-full w-full border text-start p-2 rounded-sm bg-slate-100/90 transition-all hover:bg-white ">

                          <div className="flex justify-between items-center">
                            <a href="" className="font-bold flex items-center gap-2 text-black">
                              {inv.totalAmount.startsWith('+') ? (

                                  <div className="bg-slate-800 rounded-full p-2">
                                  <ArrowUp className="text-white"/>
                                  </div>

                              ) : (

                                <div className="bg-slate-800 rounded-full p-2">
                                  <ArrowDown className="text-white"/>
                                  </div>
                              )
                              
                              }
                            </a>
                              
                              <div className="flex items-center gap-2">
                               {
                                inv.paymentMethod.startsWith("Cr")  ? (
                                  <CreditCard className="text-black"/>
                                ) : (
                                  <Landmark className="text-black"/>
                                )
                               } 
                              <p className="font-bold text-black text-xs md:text-sm items-center align-middle">{inv.title}</p>
                              </div>

                              <p className={`${inv.totalAmount.startsWith('-')  ? 'text-red-500' : 'text-green-500'} font-bold`}>{inv.totalAmount} €</p>                      
                              
                          </div>


                      </div>
                    ))}


                        


              



            
                        
                </div>
        <a href="" className="mt-1">
          <Button className="border border-white/60 mx-auto w-full bg-slate-100/90 transition-all hover:bg-white text-black">
            See more
          </Button>
        </a>
        </CardContent>
        </Card>
        </motion.div>
        </AnimatePresence>
    )
  }
  