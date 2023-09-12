import { Container, Heading, Text, Box, Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

function About() {
  const { colorMode, toggleColorMode } = useColorMode(); // Get the current color mode

  return (
    <Box>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
      <Heading>About</Heading>
    </Box>
  );
}

export default About;
