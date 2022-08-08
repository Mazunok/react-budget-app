import styled from "styled-components";

const StyledSpentCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 335px;
  height: 100px;
  background: #e7bbe3;
  border-radius: 10px;
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

export { StyledSpentCard, Text };
