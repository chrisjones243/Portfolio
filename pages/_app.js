// pages/_app.js
import React, { useState } from "react";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

import Menu from "../components/menu";
import Drawer from "../components/drawer";
import { theme } from "../styles/theme";

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

  console.log("colorMode", colorMode);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        bg={theme.colors.background[colorMode]} // Update this line        // minH="100vh"
        // minW={"full"}
        mx={20}
        position="relative"
      >
        <Flex justify={"space-between"} position="absolute" w={"full"}>
          {lines}
        </Flex>

        <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

        <Box pt={"40"} />

        <Menu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
