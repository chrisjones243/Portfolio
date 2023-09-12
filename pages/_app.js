// pages/_app.js
import React, { useState, useMemo } from "react";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

import NavBar from "../components/navBar";
import NavPage from "../components/navPage";
import { theme } from "../styles/theme";
import { Container } from "postcss";

const line = () => {
  return <Box bg={"stroke"} h="100vh" w="1px" top={0} />;
};

const numberOfLines = 5;

const lines = Array(numberOfLines)
  .fill()
  .map((_, i) => {
    return <Box key={i}>{line()}</Box>;
  });

function MyApp({ Component, pageProps }) {
  const { colorMode } = useColorMode(); // Get the current color mode
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);

    if (!isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        bg={theme.colors.background[colorMode]} // Update this line
        mx={20}
        minH={"100vh"}
      >
        <NavBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <Box pt={"40"} />
        <Component {...pageProps} />

        {isDrawerOpen && <NavPage isDrawerOpen={isDrawerOpen} />}

        <Flex
          justify="space-between"
          width="full"
          position="fixed"
          left={0}
          px={20}
          top={0}
          pointerEvents={"none"}
        >
          {lines}
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
