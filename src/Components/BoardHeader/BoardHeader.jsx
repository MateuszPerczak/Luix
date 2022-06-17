import styled from "@emotion/styled";

const BoardHeader = styled.span`
  width: 100%;
  height: 20%;
  background: ${({ theme: { transparentBoard } }) => {
    return transparentBoard;
  }};
  backdrop-filter: blur(10px) saturate(180%);
  font-size: 7vmin;
  font-weight: bold;
`;

export default BoardHeader;
