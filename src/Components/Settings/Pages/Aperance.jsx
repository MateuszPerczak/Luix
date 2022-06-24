import styled from "@emotion/styled";
import { useContext, useRef, useState } from "react";
import Properties from "../../../Contexts/Properties";
import SettingContainer from "../SettingContainer";
import SettingText from "../SettingText";
import SettingButton from "../SettingButton";
import Icon from "../../Icon/Icon";

const StyledAperance = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledImg = styled.img`
  height: 40px;
`;

const WallpapersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  padding: 5px;
  height: 90%;
  border-radius: 6px;
  background: ${({ theme: { taskBar } }) => {
    return taskBar;
  }};
  color: ${({ theme: { color } }) => {
    return color;
  }};
`;

const Aperance = () => {
  const { properties, setProperties } = useContext(Properties);
  const [wallpapers, setWallpapers] = useState([
    "./images/background.png",
    properties.background.image,
  ]);

  const wallpaperUrl = useRef(null);

  const toggleImageFit = () => {
    setProperties((oldProperties) => {
      return {
        ...oldProperties,
        background: {
          image: oldProperties.background.image,
          cover: !oldProperties.background.cover,
          repeat: oldProperties.background.cover,
        },
      };
    });
  };

  const chamgeImage = (wallpaper) => {
    setProperties((oldProperties) => {
      return {
        ...oldProperties,
        background: {
          image: wallpaper,
          cover: oldProperties.background.cover,
          repeat: oldProperties.background.repeat,
        },
      };
    });
  };

  const addImage = () => {
    setWallpapers((prevWallpapers) => {
      return [...prevWallpapers, `${wallpaperUrl.current.value}`];
    });
    wallpaperUrl.current.value = "";
  };

  return (
    <StyledAperance>
      <SettingContainer>
        <SettingText>Wallpapers</SettingText>
        <WallpapersWrapper>
          {wallpapers.map((wallpaper, index) => {
            return (
              <SettingButton onClick={() => chamgeImage(wallpaper)} key={index}>
                <StyledImg src={wallpaper} />
              </SettingButton>
            );
          })}
        </WallpapersWrapper>
      </SettingContainer>

      <SettingContainer>
        <SettingText>Add wallpaper</SettingText>
        <InputWrapper>
          <StyledInput placeholder="Enter URL" ref={wallpaperUrl} />
          <SettingButton onClick={() => addImage()}>
            <Icon>&#xE109;</Icon>
          </SettingButton>
        </InputWrapper>
      </SettingContainer>
      <SettingContainer>
        <SettingText>Chocse fit for your desktop image</SettingText>
        <SettingButton onClick={() => toggleImageFit()}>
          <SettingText>
            {properties.background.cover ? "Fill" : "Tile"}
          </SettingText>
        </SettingButton>
      </SettingContainer>
    </StyledAperance>
  );
};

export default Aperance;
