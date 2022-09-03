import styled from "@emotion/styled";

const StyledCalculator = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  width: 100%;
`;

export const Diplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  height: 33%;
  font-size: 6rem;
  padding-top: 2px;
  line-height: 0.5;
`;

export const KeyPad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  padding: 10px;
  flex: 1 1 100%;
  user-select: none;
`;

export const Key = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  padding-top: 2px;
  border-radius: 10px;
  background-color: ${({ theme: { appElement } }) => appElement};
  backdrop-filter: blur(20px) saturate(100%);
  &:hover {
    background-color: ${({ theme: { appElement } }) => appElement};
  }
`;

export default StyledCalculator;
