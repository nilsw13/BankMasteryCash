import ChartSection from "@/components/dashboard/charts/ChartSection";

import AmountCardsSection from "@/components/dashboard/amountsCards/AmountCardsSection";

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
