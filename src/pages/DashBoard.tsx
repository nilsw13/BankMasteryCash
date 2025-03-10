import ChartSection from "@/components/dashboard/charts/ChartSection";

import AmountCardsSection from "@/components/dashboard/amountsCards/AmountCardsSection";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function DashBoard() {
  return (
    <div>
      <div className="container mx-auto px-4 py-12">
        <section className="mb-8 mt-10">
          {/* Section Cartes de montants */}
          <div>
            <Link to={"/"}>
              <div className="relative text-white -top-6 md:-top-10 md:-left-10">
                <ArrowLeft />
              </div>
            </Link>

            <AmountCardsSection />
          </div>
        </section>
        <section className="mb-8 ">
          {/* Section Graphiques */}
          <ChartSection />
        </section>
      </div>
    </div>
  );
}

export default DashBoard;
