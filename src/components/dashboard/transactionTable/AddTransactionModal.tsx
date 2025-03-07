import { Button } from '@/components/ui/button'
import { TransactionPostDto, useTransaction } from '@/hooks/use-transactions'
import { DoorClosed, PlusIcon, XIcon } from 'lucide-react'
import React, { useState } from 'react'

function AddTransactionModal() {

    const {addNewTransaction, isAdding, addingError} = useTransaction();

    const [amount, setAmount] = useState(0);
    const [customer, setCustomer] = useState("");
    const [reference, setReference] = useState("");
    const [transactionType, setTransactionType] = useState("")


    const [formData, setFormData] = useState<TransactionPostDto>({
        amount: 0, 
        reference: "",
        customer: "Nilsw13",
        paymentMethod :"credit_card",
        type: "income"
    })



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const {name, value} = e.target
      setFormData(prev => ({
         ...prev,
         [name]: name === "amount" ? parseFloat(value) || 0 : value
      }));

    };

 
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("submitted transaction:", formData);
        addNewTransaction(formData)
        window.location.href = "#"
        


    }

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
                    <a href="#" className='absolute md:right-[35%]'>
                                <Button className='absolute bg-red-300 text-slate-800 hover:bg-rose-400'><XIcon/></Button>
                              </a>
                    <form onSubmit={handleSubmit}>
                            <h2 className='text-secondary mb-10 font-bold text-2xl'>
                              Add new transaction
                            </h2>

                          <div className='grid text-white gap-4 w-full'>
                          
                            <label  className='font-bold text-secondary text-xl'>Amount</label>
                            <input onChange={handleChange} name="amount" value={formData.amount}  type="number" className='rounded-lg p-2 bg-slate-800 text-blue-300 font-bold' /> 


                            <label className='font-bold text-secondary text-xl'>Reference</label>
                            <input onChange={handleChange} name="reference" value={formData.reference} type="text"  className='rounded-lg p-2 bg-slate-800 text-blue-300 font-bold' placeholder='Netflix, Mcdonalds..' /> 

                            <label htmlFor='paymentMethod'  className='font-bold text-secondary text-xl'>Paiment method</label>
                            <select onChange={handleChange} required value={formData.paymentMethod} name="paymentMethod" id="paymentMethod" className='bg-slate-800 text-blue-300 font-bold rounded-lg p-2'>
                              <option value="bank_transfert">Bank transfert</option>
                                <option value="credit_card" >Credit card</option>
                            </select>

                            <label  className='font-bold text-secondary text-xl'>Income ? Outcome ?</label>
                            <select onChange={handleChange} required value={formData.type} name="type" id="type" className='bg-slate-800 text-blue-300 font-bold rounded-lg p-2'>
                              <option value="income">Income</option>
                                <option value="outcome">Outcomes</option>
                            </select>
                          </div>



                                    <div className='flex gap-2 mt-4 w-full'>
                                    <a href="#" className='w-full '>
                                        <Button className={`bg-green-300 text-slate-800 hover:bg-green-400 w-full mb-4  `} disabled={isAdding}  type='submit'>Submit</Button>
                                      </a>
                                      

                                      
                                    </div>
                      </form>


                            
                    </div>
                   



            </div>
            
        </div>
    </div>
  )
}

export default AddTransactionModal