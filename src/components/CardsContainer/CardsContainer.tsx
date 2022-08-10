import { BudgetCard } from "../BudgetCard/BudgetCard";
import { RemainingCard } from "../RemainingCard/RemainingCard";
import { SpentCard } from "../SpentCard/SpentCard";
import { Title } from "../Title/Title";
import { StyledCardsContainer } from "./styles";

export const CardsContainer = () => {
  return (
    <StyledCardsContainer>
      <Title text="Budge App" />
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </StyledCardsContainer>
  );
};
