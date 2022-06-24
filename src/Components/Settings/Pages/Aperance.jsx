import styled from "@emotion/styled";
import { useContext } from "react";
import Properties from "../../../Contexts/Properties";
import SettingContainer from "../SettingContainer";
import SettingText from "../SettingText";
import SettingButton from "../SettingButton";

const StyledAperance = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledImg = styled.img`
  height: 40px;
  width: 100%;
`;

const WallpapersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Aperance = () => {
  const { properties, setProperties } = useContext(Properties);

  const wallpapers = [
    "/images/background.png",
    "https://wallpaperaccess.com/full/84248.png",
    "https://wallpaperaccess.com/full/543797.jpg",
  ];

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

  return (
    <StyledAperance>
      <SettingContainer>
        <SettingText>Wallpaper</SettingText>
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
