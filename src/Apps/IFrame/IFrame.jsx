import styled from "@emotion/styled";
import { useState } from "react";

const StyledIFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 35px;
`;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 100%;
  aspect-ratio: 1;
  font-size: 18px;
  user-select: none;
  font-family: "Segoe Fluent Icons", sans-serif;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
  &:active {
    transform: scale(0.95);
  }
`;

const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 100%;
  aspect-ratio: 1;
  font-size: 18px;
  user-select: none;
  font-family: "Segoe Fluent Icons", sans-serif;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
`;

const AddressBar = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  padding: 5px;
  width: 100%;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
  color: ${({ theme: { color } }) => {
    return color;
  }};
`;

const StyledContent = styled.iframe`
  outline: none;
  border: none;
  height: 100%;
  border-radius: 4px;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
`;

const IFrame = () => {
  const [address, setAddress] = useState("");

  return (
    <StyledIFrame>
      <TopBar>
        <StyledButton
          onClick={() => {
            const oldAddress = address;
            setAddress("");
            setTimeout(() => {
              setAddress(oldAddress);
            }, 10);
          }}
        >
          &#xE149;
        </StyledButton>
        <StyledButton
          onClick={() => setAddress("https://mateuszperczak.github.io/")}
        >
          &#xE10F;
        </StyledButton>
        <AddressBar>
          <StyledIcon>&#xE167;</StyledIcon>
          <StyledInput
            placeholder="Enter URL"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </AddressBar>
      </TopBar>
      <StyledContent src={address} />
    </StyledIFrame>
  );
};

export default IFrame;
