import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import React from 'react'

function AddTransactionModal() {
  return (

    <div>
    <div className='text-sm flex items-center text-white'>
      <p className='pr-10'>Add a transaction</p>
      <a href="#maModale">
        <Button className="p-2 mr-10 w-10 h-10 bg-blue-500/20 hover:bg-blue-500/30 cursor-pointer rounded-full">
          <PlusIcon className="text-blue-500" />
        </Button>
      </a>
    </div>



    <div id="maModale" className="fixed z-10 inset-0 bg-black/80 flex items-center justify-center opacity-0 invisible target:opacity-100 target:visible transition-opacity duration-300 ease-in-out">

            <div className='w-auto pl-10 pr-10  bg-slate-800/70 h-auto m-4 p-4 rounded-lg md:w-3xl'>
                <div className='flex flex-col items-center space-y-5 w-full '>
                    <h2 className='text-white font-bold text-2xl'>
                      Add new transaction
                    </h2>

                  <div className='grid text-white gap-4 w-full'>

                    <label >Amount</label>
                    <input type="number" className='rounded-lg p-2 bg-white text-slate-800 font-bold' /> 


                    <label >Reference</label>
                    <input type="text" className='rounded-lg p-2 bg-white text-slate-800 font-bold' placeholder='Netflix, Mcdonalds..' /> 

                    <label  >Paiment method</label>
                    <select name="paiment-method" id="paiment-method" className='bg-white text-slate-800 font-bold rounded-lg p-2'>
                       <option value="bank-transfer">Virement bancaire</option>
                        <option value="credit-card">Carte de crédit</option>
                    </select>
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

export default AddTransactionModal