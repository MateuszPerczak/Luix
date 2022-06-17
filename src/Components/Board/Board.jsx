import styled from "@emotion/styled";

const StyledBoard = styled.div`
  width: 100%;
  height: 80%;
  background-color: ${({ theme: { board } }) => {
    return board;
  }};
`;

const Board = () => {
  return <StyledBoard></StyledBoard>;
};

export default Board;
