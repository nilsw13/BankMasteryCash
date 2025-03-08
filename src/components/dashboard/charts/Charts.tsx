import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";

import LineChart from "./LineChart";

function Charts() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <Card className="w-full bg-transparent border-white/20 border md:h-[590px] group ">
          <CardHeader>
            <CardTitle className="font bold text-xl text-blue-300/60 group-hover:text-blue-300 transition-all">
              Spending / Incomes overview
            </CardTitle>
            <CardDescription>
              Showing total of incomes and spending for the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-8 flex flex-col gap-10">
              <div className=" flex flex-col md:flex-row ">
                <LineChart />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}

export default Charts;
