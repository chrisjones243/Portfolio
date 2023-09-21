// pages/_app.js
import React, { useState, useEffect } from "react";

import { ChakraProvider, Flex, Box } from "@chakra-ui/react";

import NavBar from "../components/navBar";
import NavPage from "../components/navPage";
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [animationState, setAnimationState] = useState(true); // true = open, false = closed

  const toggleDrawer = () => {
    if (isDrawerOpen) {
      setAnimationState(false);
      setTimeout(() => {
        setIsDrawerOpen(!isDrawerOpen);
        document.body.style.overflow = "auto";
      }, 600);
    } else {
      setAnimationState(true);
      setIsDrawerOpen(!isDrawerOpen);
      document.body.style.overflow = "hidden";
    }

    console.log("animateState:", animationState); // Debugging log
  };

  return (
    <ChakraProvider theme={theme}>
      <Box mx={20} minH={"100vh"}>
        <NavBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <Box pt={"40"} />
        <Box>
          <Component {...pageProps} />
        </Box>

        {isDrawerOpen && <NavPage animate={animationState} />}

        <Flex
          justify="space-between"
          width="full"
          left={0}
          px={20}
          top={0}
          zIndex={-1}
          position="fixed"
        >
          {lines}
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
