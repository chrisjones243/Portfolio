import { Container, Heading, Text } from "@chakra-ui/react";

function HomePage() {
  return (
    <Container w={"full"} textAlign={"left"}>
      <Heading>Hi, I&apos;M CHRIS </Heading>
      <Text variant={"subheading"}>This is a subheading</Text>
      <Text fontSize={"body"}>This is the body text</Text>
    </Container>
  );
}

export default HomePage;
