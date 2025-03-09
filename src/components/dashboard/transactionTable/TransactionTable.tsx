import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUp, CreditCard, Landmark } from "lucide-react";
import FilterToggles from "./FilterToggles";
import { useTransaction } from "@/hooks/use-transactions";
import AllElementsModale from "@/components/modales/AllElementsModale";
import AddingModale from "@/components/modales/AddingModale";

export function TransactionTable() {
  const { transactions, activeFilter, filterTransaction, resetFilter } =
    useTransaction();

  const reverseTransactions = [...transactions].reverse();

  return (
    <AnimatePresence>
      <motion.div
        className="h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="bg-transparent border-white/20 min-h-[499px] flex flex-col">
          <CardHeader className="group">
            <CardTitle className="font bold text-md text-blue-300/60 group-hover:text-blue-300 transition-all">
              <div className="flex justify-between">
                <div className="flex gap-2">
                <h3>Recent transactions</h3>
                  <AddingModale variant="transaction"/>
                </div>
                
                <div className="">
                  <FilterToggles
                    activeFilter={activeFilter}
                    onFilterChange={filterTransaction}
                    onFilterReset={resetFilter}
                  />
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col h-full">
            <div className="w-full mt-4 grid text-white border-2 border-white/20 gap-4 items-center p-3 text-center rounded-sm mx-auto  mb-6">
              {reverseTransactions.slice(0, 5).map((inv) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 100 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid h-full w-full border text-start  rounded-sm bg-blue-900/20  hover:bg-blue-900/40  border-white/20 p-1 group "
                >
                  <div className="flex justify-between items-center">
                    <a
                      href=""
                      className="font-bold flex items-center gap-2 text-black"
                    >
                      {inv.type.startsWith("inc") ? (
                        <div className="bg-green-500/30  rounded-full p-2">
                          <ArrowUp className="text-green-600 w-4 h-4" />
                        </div>
                      ) : (
                        <div className="bg-destructive/20 text-blue-500 rounded-full p-2">
                          <ArrowDown className="text-destructive w-4 h-4" />
                        </div>
                      )}
                    </a>

                    <div className="flex flex-wrap items-center gap-2 ">
                      {inv.paymentMethod.startsWith("cr") ? (
                        <CreditCard className="text-blue-400/60 group-hover:text-blue-400 w-4 h-4" />
                      ) : (
                        <Landmark className="text-blue-400/60 group-hover:text-blue-400 w-4 h-4" />
                      )}
                      <p className="font-bold text-blue-500/60 group-hover:text-blue-400 text-xs md:text-sm items-center align-middle">
                        {inv.reference}
                      </p>
                    </div>

                    <p
                      className={`${
                        inv.type.startsWith("out")
                          ? "text-red-500/60 group-hover:text-red-500"
                          : "text-green-500/60 group-hover:text-green-500"
                      } transition-all font-bold text-xs`}
                    >
                      {inv.amount.toFixed(2)} €
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex-grow pt-5 "></div>
            <AllElementsModale variant="transaction" />
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
