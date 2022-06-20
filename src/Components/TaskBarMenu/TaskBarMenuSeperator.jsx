import styled from "@emotion/styled";

const TaskBarMenuSeperator = styled.div`
  display: flex;
  border-left: 2px solid
    ${({ theme: { seperator } }) => {
      return seperator;
    }};
  padding-left: 10px;
`;

export default TaskBarMenuSeperator;
