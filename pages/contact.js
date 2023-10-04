import client from "../sanity/lib/client";
import groq from "groq";
import { Flex, Heading, Text, Box, Grid, GridItem } from "@chakra-ui/react";
import { Avatar } from "@readyplayerme/visage";

import { BasedAtText } from "../components/misc";
import SocialMediaMap from "../components/socialMediaMap";

function Contact({ details }) {
  const { email, basedAt, socialMedia } = details;

  console.log(details);

  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem colSpan={2}>
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
            {/* https://www.iconfinder.com/collections/collection/1672007 */}
            <SocialMediaMap array={socialMedia} />
          </Flex>
        </GridItem>
        <GridItem colSpan={1}>
          <Avatar
            modelSrc={
              "https://models.readyplayer.me/64d014f6a959c17297c67ac0.glb"
            }
            cameraInitialDistance={2.6}
            animationSrc="animations/gangnam_style.fbx"
            animationClip="gangnam_style_animation"
          />
        </GridItem>
        <GridItem colSpan={1} />
      </Grid>
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
