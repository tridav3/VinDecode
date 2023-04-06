import styled from "styled-components";

export const COLORS = {
  Purple: "hsl(258deg, 100%, 50%)",
  OliveDrab: "#6B8E23",
  Sage: "#87AE73",
  GreenGrey: "#78866B",
  OliveGreen: "#4B5320",
  HunterGreen: "#355E3B",
  Cream: "#FFFDD0",
  Beige: "#F5F5DC",
  Rust: "#8B3103",
  MustardYellow: "#FFDB58",
  BurntOrange: "#CC5500",
  DarkOliveGreen: "#53682A",
  gray: "#d3d3d3",
  MutedGreen: "#b6c199",
};

export const FONTS = {
  default: `sans-serif; text-decoration: none;`,
};

export const Button = styled.button`
  background-color: ${COLORS.OliveDrab};
  color: ${COLORS.Cream};
  font-family: ${FONTS.default};
  font-size: 8x;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLORS.HunterGreen};
  }
`;
