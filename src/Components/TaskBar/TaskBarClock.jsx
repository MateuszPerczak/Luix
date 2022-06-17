import styled from "@emotion/styled";

const StyledTaskBarClock = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 10px;
  width: 100px;
  height: 100%;
  border-radius: 8px;
  user-select: none;
`;

const TaskBarIcon = styled.span`
  font-family: "Segoe Fluent Icons", sans-serif;
  font-size: 18px;
`;

const StyledDate = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  line-height: 0.8;
  font-size: 18px;
`;

const TaskBarClock = () => {
  return (
    <StyledTaskBarClock>
      <StyledDate>
        <span>18:05</span>
        <span>17.06.2022</span>
      </StyledDate>
      <TaskBarIcon>&#xE121;</TaskBarIcon>
    </StyledTaskBarClock>
  );
};

export default TaskBarClock;
