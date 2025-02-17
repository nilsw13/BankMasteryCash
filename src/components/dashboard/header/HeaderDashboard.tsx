import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"


function HeaderDashboard() {
  return (
    <div className="flex justify-between items-center group">


            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/nilsw13.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="text-blue-300/60 group-hover:text-blue-300 md:text-3xl font-bold text-xs transition-all">Dashboard</h1>
            </div>

          <a href="" className="">
            <Button className="p-4  w-10 h-10 bg-blue-500/20  hover:bg-blue-500/30 cursor-pointer   rounded-full ">
              <PlusIcon className="text-blue-500" />
            </Button>
            </a>
          </div>
  )
}

export default HeaderDashboard