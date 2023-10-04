import {
  Container,
  Heading,
  Text,
  Box,
  Image,
  Grid,
  GridItem,
  AspectRatio,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

import { ButtonMap } from "../components/misc";

function HomePage() {
  const { colorMode, toggleColorMode } = useColorMode(); // Get the current color mode

  const buttons = [
    { text: "Case Studies", link: "/caseStudies" },
    { text: "Work Experience", link: "/workExperience" },
    { text: "Contact", link: "/contact" },
  ];

  return (
    <Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={0} h="full" py={20}>
        <GridItem colSpan={1}>
          <Heading>
            Hi, I&apos;M <br />
            CHRIS{" "}
          </Heading>
        </GridItem>
        <GridItem
          colSpan={3}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          mx={100}
        >
          <Box pt={107} />
          <AspectRatio ratio={1} w={"full"}>
            <Image
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
              alt="me"
            />
          </AspectRatio>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(4, 1fr)" gap={0} h="full" py={20} pt={40}>
        <GridItem colSpan={2}>
          <AspectRatio ratio={1}>
            <Image
              src="https://images.unsplash.com/photo-1628107628986-60ec506745ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3166&q=80"
              alt="me"
            />
          </AspectRatio>
        </GridItem>
        <GridItem colSpan={2} px={10} height={"full"}>
          <Heading>WHO?</Heading>
          <Text variant={"body"} pt={5}>
            {" "}
            Officia reprehenderit dolor excepteur magna velit pariatur ea veniam
            cupidatat id ex aute consectetur esse. Ullamco laborum amet eu
            minim. Nostrud quis est commodo ut pariatur. Magna elit et aliquip
            minim proident nostrud veniam ullamco enim incididunt pariatur.
            Cillum eu pariatur culpa exercitation magna adipisicing est proident
            in ut.{" "}
          </Text>

          <ButtonMap data={buttons} />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default HomePage;
