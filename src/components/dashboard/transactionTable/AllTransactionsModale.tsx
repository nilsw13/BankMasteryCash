import { Button } from "@/components/ui/button"
import { useTransaction } from "@/hooks/use-transactions"
import { File } from "lucide-react"

function AllTransactionsModale() {

        const {transactions} = useTransaction()


  return (
    <div>
    <div className='text-4xl text-white'>

    <a href="#maModale3" className="mt-16">
            <Button className=" mr-10  h-10 border mx-auto p-6   w-full bg-blue-900/20  hover:bg-blue-900/40 transition-all  border-white/20 text-blue-600 hover:text-blue-400 ">
              See more
            </Button>
            </a>

    </div>



    <div id="maModale3" className="fixed z-10 inset-0 bg-black/70 flex items-center justify-center opacity-0 invisible target:opacity-100 target:visible transition-opacity duration-300 ease-in-out">

            <div className='w-auto pl-10 pr-10  bg-slate-800/70 h-auto m-4 p-4 rounded-lg md:w-3xl'>
                <div className='flex flex-col items-center space-y-5 w-full '>

                  <div className='grid text-white gap-4 w-full'>

                    <label className="mx-auto font-bold text-2xl mt-4" >All Transactions</label>

                    <div  className="border-2 border-white rounded-lg p-1.5 md:h-[491px] overflow-y-scroll  ">
                        
                    <div className="grid grid-cols-12 border-b-2 rounded-lg gap-14 items-center border-white py-2 border">
                  <p className="col-span-3 text-sm font-bold text-center">Date</p>
                  <p className="col-span-3 text-sm font-bold text-center">Reference</p>
                  <p className="col-span-3 text-sm font-bold text-center">Payment Method</p>
                  <p className="col-span-3 text-sm font-bold text-center">Amount</p>
                </div>
                {transactions.map((tran) => (
                  <div key={tran.id} className=" grid grid-cols-12 border-b border-white/30 gap-14 items-center py-3">
                    <p className="col-span-3 text-sm whitespace-nowrap text-center  font-bold">{tran.created_at}</p>
                    <p className="col-span-3 text-sm whitespace-nowrap text-center  font-bold">{tran.reference}</p>
                    <p className="col-span-3 text-sm whitespace-nowrap text-center  font-bold">{tran.paymentMethod}</p>
                    <p className="col-span-3 text-green-200 font-bold text-center ">{tran.amount.toFixed(2)} €</p>
                  </div>
                ))}

                    </div>
                    
                  </div>



                 <div className='mt-4 w-full grid grid-cols-2 gap-2'>

                    <a href="#" className="col-span-1">
                        <Button className='w-[100%] bg-green-200 text-slate-800 hover:bg-green-300 font-bold'>Export in csv  <File/></Button>
                    </a>  
                    
                    <a href="#" className="col-span-1">
                        <Button className='w-[100%] bg-red-300 text-slate-800 hover:bg-rose-400 font-bold'>Close</Button>
                    </a>
                 </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default AllTransactionsModale