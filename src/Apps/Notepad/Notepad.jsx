import styled from "@emotion/styled";

const StyledNotepad = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const Styledinput = styled.textarea`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 20px;
  color: ${({ theme: { color } }) => {
    return color;
  }};
`;

const Notepad = () => {
  return (
    <StyledNotepad>
      <Styledinput />
    </StyledNotepad>
  );
};

export default Notepad;
