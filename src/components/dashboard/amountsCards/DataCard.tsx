import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { AnimatePresence, motion } from "framer-motion";

interface DataCardProps {
  title: string;
  amount?: number | null;
  stats?: string | undefined;
  totalAmount?: number | 0;
  icon: React.ReactNode;
}

function DataCard({ title, amount, stats, totalAmount, icon }: DataCardProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Card className=" min-w-[250px] md:w-[380px] lg:w-[99%] h-[110px] bg-blue-900/20  hover:bg-blue-900/20 border border-white/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-4 pb-0 ">
            <CardTitle className="text-blue-400">{title}</CardTitle>

            <div>{icon}</div>
          </CardHeader>
          <CardContent>
            {totalAmount && title === "Total balance" ? (
              <p
                className={`${(totalAmount ?? 0) > 0 ? "text-green-500 text-md font-bold" : "text-red-500  text-md font-bold"} font-bold`}
              >
                {totalAmount.toFixed(2)} €
              </p>
            ) : (
              <p
                className={`${(amount ?? 0) > 0 && title !== "Outcomes" ? "text-green-500  text-md font-bold" : "text-red-500  text-md font-bold"} font-bold`}
              >
                {amount?.toFixed(2)} €
              </p>
            )}

            <p className=" text-gray-500 text-xs">{stats}</p>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}

export default DataCard;
