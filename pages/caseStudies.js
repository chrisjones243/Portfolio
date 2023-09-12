import { Container, Heading, Text, Box, Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

function Casestudies() {
  const { colorMode, toggleColorMode } = useColorMode(); // Get the current color mode

  return (
    <Box>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
      <Heading>Case Studies </Heading>
    </Box>
  );
}

export default Casestudies;
