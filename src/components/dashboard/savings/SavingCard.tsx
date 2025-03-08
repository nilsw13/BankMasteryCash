import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSavingAccount } from "@/hooks/use-savingAccount";
import { AnimatePresence, motion } from "framer-motion";
import { VaultIcon } from "lucide-react";

import AddingModale from "../../modales/AddingModale";
import AllElementsModale from "@/components/modales/AllElementsModale";

function SavingCard() {
  const { savings } = useSavingAccount();

  const reverseSavings = [...savings].reverse().slice(0, 4);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        <Card className="bg-transparent border-white/20 min-h-[589.59px] flex flex-col">
          <CardHeader className="group">
            <CardTitle className="font bold text-xl text-blue-300/60 group-hover:text-blue-300 transition-all">
              <div className="flex justify-between">
                <h3>Savings</h3>
                <AddingModale variant="saving account" />
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col h-full">
            <div className="w-full mt-4 grid text-white border-2 border-white/20 gap-4 items-center p-3 text-center rounded-sm mx-auto  mb-6">
              {reverseSavings.map((acc) => (
                <div className="grid h-fit w-full border text-start rounded-sm bg-blue-900/20  hover:bg-blue-900/40  border-white/20 group ">
                  <div
                    key={acc.id}
                    className="flex justify-between items-center "
                  >
                    <a
                      href=""
                      className="font-bold flex items-center gap-2 text-blue-400/60 group-hover:text-blue-300 transition-all"
                    >
                      <div className="border-transparent  pl-2  pt-2 pb-1 ">
                        <VaultIcon className="border-2  rounded-full h-12 w-12 p-2 bg-blue-900/20  hover:bg-blue-900/20  border-white/20 text-blue-600 group-hover:text-blue-300" />
                      </div>
                      {acc.name}
                    </a>
                    <p className="font-bold pr-2 text-md whitespace-nowrap text-green-500/60 group-hover:text-green-500">
                      {acc.amount.toFixed(2)} $
                    </p>
                  </div>

                  <p className="text-blue-400/60 ml-16 text-xs">{acc.rate} %</p>
                </div>
              ))}
            </div>

            <div className="flex-grow"></div>
            <AllElementsModale variant="saving account" />
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}

export default SavingCard;
