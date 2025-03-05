import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

function AddSavinsModale() {
  return (
    <div className="mb-0 pb-0">
    <div className='text-4xl text-white'>

    <a href="#maModale2">
        <PlusIcon className="w-8 h-8 border-2 rounded-sm p-1 bg-blue-900/20  hover:bg-blue-900/20  border-white/20 text-blue-600"/>
    </a>

    </div>



    <div id="maModale2" className="fixed z-10 inset-0 bg-black/70 flex items-center justify-center opacity-0 invisible target:opacity-100 target:visible transition-opacity duration-300 ease-in-out">

            <div className='w-auto pl-10 pr-10  bg-slate-800/70 h-auto m-4 p-4 rounded-lg md:w-3xl'>
                <div className='flex flex-col items-center space-y-5 w-full '>

                    <h2 className="text-white text-2xl font-bold">Add new saving account</h2>

                  <div className='grid text-white gap-4 w-full'>

                    <label >Title</label>
                    <input type="text" className='rounded-lg p-2 bg-white text-slate-800 font-bold'  placeholder='Real Estate..' /> 


                    <label >ROI</label>
                    <input type="number" className='rounded-lg p-2 bg-white text-slate-800 font-bold'/> 

                  
                    
                  </div>



                 <div className='flex gap-2 mt-4'>
                 <a href="#">
                    <Button className='bg-green-300 text-slate-800 hover:bg-green-400'>Submit</Button>
                  </a>
                  <a href="#">
                    <Button className='bg-red-300 text-slate-800 hover:bg-rose-400'>Close</Button>
                  </a>
                 </div>

                </div>
            </div>

        </div>
    </div>
)
}

export default AddSavinsModale