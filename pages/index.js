import { Container, Heading, Text, Box, Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

function HomePage() {
  const { colorMode, toggleColorMode } = useColorMode(); // Get the current color mode

  return (
    <Container>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
      <Heading>Hi, I&apos;M CHRIS </Heading>
      <Text variant={"subheading"}>This is a subheading</Text>
      <Text fontSize={"body"}>This is the body text</Text>
      <Box height={"100vh"} bg={"green.500"}>
        This is a box
      </Box>
    </Container>
  );
}

export default HomePage;
