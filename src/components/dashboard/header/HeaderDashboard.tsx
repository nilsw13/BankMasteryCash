import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import AddTransactionModal from "../transactionTable/AddTransactionModal"


function HeaderDashboard() {
  return (
    <div className="pl-10 pr-10 pb-6 flex justify-between items-center bg-transparent group border-b-2 border-white/20">


            <div className="flex items-center gap-4 ">
              <Avatar>
              <img src="https://i.pravatar.cc/300" alt="Profil" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="text-blue-300/60 group-hover:text-blue-300 md:text-3xl font-bold text-xs transition-all">Dashboard</h1>
            </div>

         <AddTransactionModal/>
          </div>
  )
}

export default HeaderDashboard