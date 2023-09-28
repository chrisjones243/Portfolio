// pages/_app.js
import React, { useState, useEffect } from "react";

import { ChakraProvider, Flex, Box } from "@chakra-ui/react";

import NavBar from "../components/navBar";
import NavPage from "../components/navPage";

import BackgroundLines from "../components/backgroundLines";
import { theme } from "../styles/theme";

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
        <Box pt={"60"} />
        <Box>
          <Component {...pageProps} />
        </Box>

        {isDrawerOpen && <NavPage animate={animationState} />}

        <BackgroundLines />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
