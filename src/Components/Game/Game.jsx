import styled from "@emotion/styled";
import { animated, useSpring } from "react-spring";
import { useState } from "react";
import BoardHeader from "../BoardHeader/BoardHeader";
import Board from "../Board/Board";

const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vmin;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  user-select: none;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const Game = () => {
  const [combination, setCombination] = useState([]);
  const [moves, setMoves] = useState(0);

  return (
    <StyledGame>
      <BoardHeader></BoardHeader>
      <Board />
    </StyledGame>
  );
};

export default Game;
