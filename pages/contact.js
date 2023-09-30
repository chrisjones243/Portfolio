import { client } from "../sanity/lib/client";
import groq from "groq";
import { Flex, Heading, Text, Box, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

import { BasedAtText } from "../components/misc";
import SocialMediaMap from "../components/socialMediaMap";

function Contact({ details }) {
  const { colorMode, toggleColorMode } = useColorMode(); // Get the current color mode

  const { email, basedAt, socialMedia } = details;

  console.log(details);

  return (
    <Box>
      <Heading>Contact</Heading>

      <Box pt={"20"} />
      <Text variant={"subheading"}>Email me</Text>
      <Text variant={"body"}>
        <a href={`mailto:${email}`}>{email}</a>
      </Text>

      <Box pt={"20"} />
      <Text variant={"subheading"}>Based At</Text>
      <BasedAtText basedAt={basedAt} />

      <Box pt={"20"} />
      <Text variant={"subheading"}>Social Media</Text>
      <Flex flexDirection={"row"} gap={"2"}>
        <SocialMediaMap array={socialMedia} />
      </Flex>
    </Box>
  );
}

export default Contact;

export async function getStaticProps({ params }) {
  const details = await client.fetch(groq`*[_type == "contact"]`);

  return {
    props: { details: details[0] },
  };
}
