import styled from "styled-components";

const StyledBudgetCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 335px;
  height: 100px;
  background: #7cc6fe;
  border-radius: 10px;
`;

const Button = styled.button`
  margin-right: 20px;
  width: 85px;
  height: 36px;
  border: none;
  background: #ffffff;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

const Text = styled.p`
  padding-left: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

export { StyledBudgetCard, Button, Text };
