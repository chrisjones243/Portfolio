import {
  extendTheme,
  defineStyle,
  defineStyleConfig,
  useColorMode,
} from "@chakra-ui/react";

import { mode } from "@chakra-ui/theme-tools";

import "../styles/globals.css";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  font: {
    dark: "#FFFFFF",
    light: "#000000",
  },
  brand: {
    dark: "#FFFFFF",
    light: "#000000",
  },
  background: {
    dark: "#000000",
    light: "#FFFFFF",
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

const styles = {
  global: (props) => ({
    body: {
      bg: mode("background.light", "background.dark")(props),
    },
  }),
};

export const theme = extendTheme({
  styles,
  config,
  colors,
  fonts,
  fontWeights,
  fontSizes,
  components: { Heading: headingTheme, Text: textTheme },
});
