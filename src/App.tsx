import React from "react";
import { BudgetCard } from "./components/BudgetCard/BudgetCard";
import { RemainingCard } from "./components/RemainingCard/RemainingCard";
import { SpentCard } from "./components/SpentCard/SpentCard";

function App() {
  return (
    <div className="container">
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </div>
  );
}

export default App;
