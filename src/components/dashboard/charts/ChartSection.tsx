import Charts from "./Charts";
import SavingCard from "../savings/SavingCard";
import { TransactionTable } from "../transactionTable/TransactionTable";

function ChartSection() {
  return (
    <div className=" grid grid-cols-1 md:grid md:grid-cols-18 gap-4">
      <div className="md:col-span-8 ">
        <Charts />
      </div>

      <div className="md:col-span-5 h-[100%] ">
        <TransactionTable />
      </div>

      <div className="md:col-span-5 h-[100%]">
        <SavingCard />
      </div>
    </div>
  );
}

export default ChartSection;
