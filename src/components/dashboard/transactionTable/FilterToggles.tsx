import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { useState } from "react";

function FilterToggles({
  activeFilter,
  onFilterChange,
  onFilterReset,
}: {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onFilterReset: () => void;
}) {
  const isIncomeActive = activeFilter === "income";
  const isOutcomeActive = activeFilter === "outcome";
  const isBothActive = activeFilter === "";

  const handleIncomeClick = () => {
    if (isIncomeActive) {
      onFilterChange("");
    } else {
      onFilterChange("income");
    }
  };

  const handleOutcomeClick = () => {
    if (isOutcomeActive) {
      onFilterChange("");
    } else {
      onFilterChange("outcome");
    }
  };

  const handleBothClicked = () => {
    onFilterChange("");
  };

  return (
    <div className="flex justify-center gap-2">
      <button
        onClick={() => {
          handleIncomeClick();
        }}
      >
        <ArrowDown
          className={`w-8 h-8 border-2 rounded-sm p-1 bg-blue-900/20  hover:bg-green-400/50  border-white/20 text-blue-600 hover:text-white cursor-pointer ${isIncomeActive ? "scale-95 bg-green-400/50 text-white" : ""} transition-all duration-300`}
        />
      </button>

      <button
        onClick={() => {
          handleOutcomeClick();
        }}
      >
        <ArrowUp
          className={`w-8 h-8 border-2 rounded-sm p-1 bg-blue-900/20  hover:bg-destructive/60  border-white/20 text-blue-600 hover:text-white cursor-pointer ${isOutcomeActive ? "scale-95 bg-destructive/60 text-white" : ""} transition-all duration-300`}
        />
      </button>
      <button
        onClick={() => {
          handleBothClicked();
        }}
      >
        <ArrowUpDown
          className={`w-8 h-8 border-2 rounded-sm p-1 bg-blue-900/20  hover:bg-blue-900/60  border-white/20 text-blue-600 hover:text-white cursor-pointer ${isBothActive ? "scale-95 bg-blue-900/60 text-white" : ""} transition-all duration-300`}
        />
      </button>
    </div>
  );
}

export default FilterToggles;
