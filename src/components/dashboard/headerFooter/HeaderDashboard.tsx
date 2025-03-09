import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import AddingModale from "../../modales/AddingModale";

function HeaderDashboard() {
  return (
    <div className="pl-10 pr-10 pb-6 flex justify-between items-center bg-transparent group border-b-2 border-white/20">
      <div className="flex items-center gap-4 ">
        <Avatar>
          <img src="https://i.pravatar.cc/300" alt="Profil" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-blue-300/60 group-hover:text-blue-300 md:text-lg font-bold text-xs transition-all">
          Dashboard
        </h1>
      </div>
      <AddingModale variant="transaction" />
    </div>
  );
}

export default HeaderDashboard;
