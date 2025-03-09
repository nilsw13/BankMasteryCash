import { AnimatePresence, motion } from "framer-motion";
import DataCard from "./DataCard";
import { ArrowDown, ArrowUp, VaultIcon, Wallet2 } from "lucide-react";
import { useTransaction } from "@/hooks/use-transactions";
import { useSavingAccount } from "@/hooks/use-savingAccount";

function AmountCardsSection() {
  const { transactions } = useTransaction();
  const { savings } = useSavingAccount();

  const totalIncomes = transactions
    .filter((transac) => transac.type === "income")
    .reduce((acc, transac) => acc + transac.amount, 0);

  const totalOutcomes = transactions
    .filter((transac) => transac.type === "outcome")
    .reduce((acc, transac) => acc + transac.amount, 0);

  const totalAmountSavings = savings.reduce((acc, sav) => acc + sav.amount, 0);

  const cards = [
    {
      id: 1,
      title: "Total balance",
      amount: 0,
      stats: "+ 20% from last month", // need to change for dynamic data %
      icon: (
        <div className="bg-blue-500/30  rounded-full p-2">
          <Wallet2 className="text-blue-600 w-4 h-4" />
        </div>
      ),
    },

    {
      id: 2,
      title: "Income",
      amount: totalIncomes,
      stats: "this month",
      icon: (
        <div className="bg-green-500/30  rounded-full p-2">
          <ArrowUp className="text-green-600 w-4 h-4" />
        </div>
      ),
    },

    {
      id: 3,
      title: "Outcomes",
      amount: totalOutcomes,
      stats: "this month",
      icon: (
        <div className="bg-red-500/30  rounded-full p-2">
          <ArrowDown className="text-red-600 w-4 h-4" />
        </div>
      ),
    },

    {
      id: 4,
      title: "Savings",
      amount: totalAmountSavings,
      stats: " + 12, 3% from last month", // need to change for dynamic data %
      icon: (
        <div className="bg-blue-500/30  rounded-full p-2">
          <VaultIcon className="text-blue-600 w-4 h-4" />
        </div>
      ),
    },
  ];

  const returnTotalAmount = () => {
    let totalAmount = 0;
    let subAmount = 0;
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].title === "Outcomes") {
        subAmount = cards[i].amount;
        totalAmount -= subAmount;
      }
      totalAmount += cards[i].amount;
    }

    return totalAmount - subAmount;
  };

  return (
    <AnimatePresence>
      <motion.div className="grid gap-4  md:grid-cols-2 lg:grid-cols-4 ">
        {cards.map((card) => (
          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.1 * card.id}}
            
          
          className="col-span-1">
            <DataCard
              key={card.id}
              title={card.title}
              icon={card.icon}
              amount={card.amount}
              totalAmount={returnTotalAmount()}
              stats={card.stats}
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default AmountCardsSection;
