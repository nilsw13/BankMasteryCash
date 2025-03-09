import { CreditCard } from "lucide-react";

function Header() {
  return (
    <header className="flex justify-between items-center mb-16">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
          <CreditCard className="w-5 h-5" />
        </div>
        <h1 className="text-xl font-bold">Bank Mastery Cash</h1>
      </div>
    </header>
  );
}

export default Header;
