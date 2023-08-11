// pages/_app.js
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import Menu from "../components/Menu";
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
  return (
    <ChakraProvider theme={theme}>
      <Box bg={"background.secondary"} minH="100vh" mx={20} position="relative">
        <Flex justify={"space-between"} position="absolute" w={"full"}>
          {lines}
        </Flex>
        <Menu />
        <Box pt={"40"} />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
