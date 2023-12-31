import {
  Heading,
  Text,
  Box,
  Image,
  Grid,
  GridItem,
  AspectRatio,
  useMediaQuery,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

import { ButtonMap } from "../components/misc";

function HomePage() {
  const buttons = [
    { text: "Case Studies", link: "/caseStudies" },
    { text: "Work Experience", link: "/workExperience" },
    { text: "Contact", link: "/contact" },
  ];

  const [isSmallScreen] = useMediaQuery("(max-width: 1280px)");

  return (
    <Box>
      <Grid
        templateColumns={["1fr", "1fr", "1fr", "1fr", "1fr 1fr 1fr 1fr"]}
        gap={0}
        h="full"
        py={[2, 10, 20]}
      >
        <GridItem colSpan={1}>
          <Heading fontSize={["4rem", "4rem", "5rem", "7rem"]}>
            Hi, I&apos;M <br />
            CHRIS{" "}
          </Heading>
        </GridItem>
        <GridItem
          colSpan={3}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          mx={[0, 30, 20, 100]}
        >
          <Box pt={[20, 50, 107]} />
          <AspectRatio ratio={1} w={"full"}>
            <Image src="/images/me.png" alt="me" />
          </AspectRatio>
        </GridItem>
      </Grid>

      <Grid
        templateColumns={["1fr", "1fr", "1fr", "1fr", "1fr 1fr 1fr 1fr"]}
        gap={0}
        h="full"
        py={[0, 1, 2]}
        pt={[20, 30, 40]}
      >
        <GridItem colSpan={2}>
          {!isSmallScreen && (
            <AspectRatio ratio={1} w={"full"}>
              <Image
                src="https://images.unsplash.com/photo-1628107628986-60ec506745ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3166&q=80"
                alt="me"
              />
            </AspectRatio>
          )}
        </GridItem>
        <GridItem colSpan={2} px={[0, 5, 10]} height={"full"}>
          <Heading fontSize={["4rem", "4rem", "5rem", "7rem"]}>WHO?</Heading>
          <Text variant={"body"} pt={5}>
            {" "}
            I’m Chris Jones. A 19-year-old Computer Science student with a
            passion for <s>money</s> coding and exploring tech&rsquo;s uncharted
            territories. Welcome to my corner of the web. Dive into my projects,
            interests, and thoughts below. Feel like saying hi? Drop me an
            email. Let&rsquo;s conquer this world together!{" "}
          </Text>

          <ButtonMap data={buttons} />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default HomePage;
