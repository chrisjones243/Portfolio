import { extendTheme, defineStyle, defineStyleConfig } from "@chakra-ui/react";
import "../styles/globals.css";

const colors = {
  font: {
    primary: "#FFFFFF",
    secondary: "#000000",
  },
  brand: {
    primary: "#FFFFFF",
    secondary: "#000000",
  },
  background: {
    primary: "#000000",
    secondary: "#FFFFFF",
  },
  stroke: "#585858",
};

const fonts = {
  heading: `'Against', sans-serif`,
  body: `'Avenir LT Pro', sans-serif`,
};

const fontWeights = {
  normal: 400,
  subheading: 750,
};

const fontSizes = {
  heading: "7rem",
  subheading: "1.5rem",
  body: "1rem",
};

const headingTheme = defineStyleConfig({
  baseStyle: {
    fontFamily: "heading",
    fontWeight: "normal",
    color: "font.secondary",
    _dark: { color: "font.primary" },
  },
  variants: {
    heading: {
      fontSize: "heading",
      fontWeight: "normal",
    },
  },
  defaultProps: {
    variant: "heading",
  },
});

const textTheme = defineStyleConfig({
  baseStyle: {
    fontFamily: "body",
    fontWeight: "normal",
    color: "font.secondary",
    _dark: { color: "font.primary" },
  },
  variants: {
    subheading: {
      fontSize: "subheading",
      fontWeight: "subheading",
    },
    body: {
      fontSize: "body",
      fontWeight: "normal",
    },
  },
});

export const theme = extendTheme({
  colors,
  fonts,
  fontWeights,
  fontSizes,
  components: { Heading: headingTheme, Text: textTheme },
});
