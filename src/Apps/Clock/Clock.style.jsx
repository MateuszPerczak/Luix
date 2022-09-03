import styled from "@emotion/styled";

const StyledClock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex: 1 1 100%;
  gap: 10px;
  width: 100%;
  user-select: none;
`;

export const StyledClockEntry = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  height: 3rem;
  border-radius: 10px;
  padding: 0 15px;
  background-color: ${({ theme: { appElement } }) => appElement};
  backdrop-filter: blur(20px) saturate(100%);
`;

export const StyledClockWrapper = styled.div`
  display: flex;
  padding-left: 20px;
  gap: 40px;
  align-items: center;
  flex: 1 1 100%;
`;

export const StyledClockTime = styled.span`
  font-size: 1.5rem;
  padding-top: 2px;
`;

export const StyledClockDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const StyledClockText = styled.span`
  font-size: 1.1rem;
  padding-top: 2px;
  line-height: 0.9;
`;

export default StyledClock;
