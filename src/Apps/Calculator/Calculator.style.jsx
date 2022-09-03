import styled from "@emotion/styled";

const StyledCalculator = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  width: 100%;
`;

export const StyledCalculatorDiplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 20px;
`;

export const StyledCalculatorKeyPad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  padding: 10px;
`;

export const StyledCalculatorKey = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 2/1;
  font-size: 2rem;
  border-radius: 10px;
  background-color: ${({ theme: { appElement } }) => appElement};
  backdrop-filter: blur(20px) saturate(100%);
`;

export default StyledCalculator;
