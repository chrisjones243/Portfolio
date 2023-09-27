import { Container, Heading, Text, Box, Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

function Contact() {
  const { colorMode, toggleColorMode } = useColorMode(); // Get the current color mode

  return (
    <Box>
      <Heading>Contact</Heading>
    </Box>
  );
}

export default Contact;
