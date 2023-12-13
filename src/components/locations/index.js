import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { Background } from "../base/common";
import { StyledCard } from "../base/card";
import { VerticalSpace, Box } from "../base/common";
import styled from "styled-components";

const Title = styled.div`
  position: Relative;
  color: ${(props) => props.theme.textPrimary};
  font-size: 24px;
  margin: auto;
  width: fit-content;
  margin-top: 5px;
`;

const FormCard = ({ onLocationClick, show, seLectedLocation }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Background show={show}>
      <Title theme={theme}>Select Your Location</Title>
      <StyledCard>
        <Box
          selected={seLectedLocation === 1}
          theme={theme}
          onClick={() => onLocationClick(1)}
        >
          location 1
        </Box>
        <Box
          selected={seLectedLocation === 2}
          theme={theme}
          onClick={() => onLocationClick(2)}
        >
          location 2
        </Box>
        <Box
          selected={seLectedLocation === 3}
          theme={theme}
          onClick={() => onLocationClick(3)}
        >
          location 3
        </Box>
        <Box
          selected={seLectedLocation === 4}
          theme={theme}
          onClick={() => onLocationClick(4)}
        >
          location 4
        </Box>
        <Box
          selected={seLectedLocation === 5}
          theme={theme}
          onClick={() => onLocationClick(5)}
        >
          location 5
        </Box>
      </StyledCard>
    </Background>
  );
};

export default FormCard;
