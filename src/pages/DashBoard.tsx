import ChartSection from "@/components/dashboard/sections/ChartSection";

import AmountCardsSection from "@/components/dashboard/sections/AmountCardsSection";
import AddTransactionModal from "@/components/dashboard/transactionTable/AddTransactionModal";
import IncomeLineChart from "@/components/dashboard/charts/LineChart";

function DashBoard() {
  return (
    <div className=" overflow-hidden  p-4 md:p-8">
      {" "}
      // Conteneur principal - définit la structure globale
      <section className="mb-8 ">
        {" "}
        {/* Section Cartes de montants */}
        <div>
          <AmountCardsSection />
        </div>
      </section>
      <section className="mb-8 ">
        {" "}
        {/* Section Graphiques */}
        <ChartSection />
      </section>
    </div>
  );
}

export default DashBoard;
