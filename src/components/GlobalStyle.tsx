import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  name: "vf-theme",
  typography: {
    fontFamily: "Vodafone Rg, Arial, Helvetica, sans-serif",
    fontFamilyLight: "Vodafone Lt, Arial, Helvetica, sans-serif",
    weight: {
      light: 300,
      normal: 500,
      bold: 700
    },
    size: {
      level1: "4rem",
      level2: "3.5rem",
      level3: "2.5rem",
      level4: "2rem",
      level5: "1.75rem",
      level6: "1.5rem",
      level7: "1.25rem",
      level8: "1rem",
      level9: "0.75rem"
    },
    lineHeight: {
      tight: "1rem",
      condensed: "1.25rem",
      normal: "1.5rem"
    }
  },
  colors: {
    vodafoneRed: "#E60000",
    vodafoneWhite: "#FFFFFF",
    vodafoneGrey: "#4A4D4E",
    turquoise: "#007C92",
    aquaBlue: "#00B0CA",
    aubergine: "#5E2750",
    redViolet: "#9C2AA0",
    freshOrange: "#EB9700",
    lemonYellow: "#FECB00",
    digitalGreen: "#428600",
    mantisGreen: "#6BB44C",
    springGreen: "#A8B400",
    maroon: "#990000",
    darkRed: "#BD0000",
    grey1: "#F4F4F4",
    grey2: "#EBEBEB",
    grey3: "#CCCCCC",
    grey4: "#AFAFAF",
    grey5: "#999999",
    grey6: "#666666",
    grey7: "#333333",
    grey8: "#383838",
    black: "#000000",
    bigStone: "#142638",
    shuttleGray: "#586371",
    mirage: "#111924"
  },
  alpha: {
    opacity0: 0,
    opacity2: 0.2,
    opacity4: 0.4,
    opacity6: 0.6,
    opacity8: 0.8,
    opacity10: 1
  },
  elevations: {
    level1:
      "0 2px 4px 0 rgba(0,0,0,0.14), 0 3px 4px 0 rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
    level2:
      "0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 3px rgba(0,0,0,0.12), 0 4px 5px 0 rgba(0,0,0,0.2)"
  }
};

const GlobalStyles = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default GlobalStyles;
