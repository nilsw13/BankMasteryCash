import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"
import { useState } from "react"


function FilterToggles() {

    const [toggleCliked, setToggleCliked] = useState<boolean>(false)
    const [expenseClicked, setExpenseClicked] = useState<boolean>(false)
    const [bothClicked, setBothClicked] = useState<boolean>(false)
    

   

    



  return (
    <div className="flex justify-center gap-2">
                        
                        <button onClick={() => { setToggleCliked(!toggleCliked); setExpenseClicked(false); setBothClicked(false) }}>
                        <ArrowUp  className={`w-8 h-8 border-2 rounded-sm p-1 bg-blue-900/20  hover:bg-green-400/50  border-white/20 text-blue-600 hover:text-white cursor-pointer ${toggleCliked ? "scale-95 bg-green-400/50 text-white" : ""} transition-all duration-300`}/>
                        </button>

                        <button onClick={() => {setExpenseClicked(!expenseClicked); setToggleCliked(false); setBothClicked(false)}}>
                        <ArrowDown className={`w-8 h-8 border-2 rounded-sm p-1 bg-blue-900/20  hover:bg-destructive/60  border-white/20 text-blue-600 hover:text-white cursor-pointer ${expenseClicked ? "scale-95 bg-destructive/60 text-white" : ""} transition-all duration-300`}/>
                        </button>
                        <button onClick={() => {setBothClicked(!bothClicked); setToggleCliked(false); setExpenseClicked(false)}}>
                        <ArrowUpDown className={`w-8 h-8 border-2 rounded-sm p-1 bg-blue-900/20  hover:bg-blue-900/60  border-white/20 text-blue-600 hover:text-white cursor-pointer ${bothClicked ? "scale-95 bg-blue-900/60 text-white" : ""} transition-all duration-300`}/>
                        </button>
    </div>
  )
}

export default FilterToggles