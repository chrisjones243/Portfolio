import {
  Box,
  Heading,
  Flex,
  Grid,
  GridItem,
  useTheme,
  Image,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

import BackgroundLines from "./backgroundLines";

import Link from "next/link";

const NavPage = ({ animate, toggleDrawer }) => {
  const { colorMode, toggleColorMode } = useColorMode(); // Get the current color mode

  const iconColor = colorMode === "light" ? 0 : 1;

  const openAnimation = {
    opacity: 1,
    transition: "0.6s ease-in-out",
  };

  const closeAnimation = {
    opacity: 0,
    transition: "0.6s ease-in-out",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={animate ? openAnimation : closeAnimation}
    >
      <Box
        bg={`background.${colorMode}`}
        w="full"
        h="full"
        top={0}
        left={0}
        px={20}
        pt={40}
        position="fixed"
      >
        <Grid templateColumns="repeat(4, 1fr)" gap={0} h="full" py={20}>
          <GridItem colSpan={3}>
            <Flex flexDirection="column" justify={"space-between"} h="full">
              <Link href="/" onClick={toggleDrawer}>
                <Heading>Home</Heading>
              </Link>

              <Link href="/caseStudies" onClick={toggleDrawer}>
                <Heading>Case Studies</Heading>
              </Link>

              <Link href="/contact" onClick={toggleDrawer}>
                <Heading>Contact</Heading>
              </Link>
            </Flex>
          </GridItem>
          <GridItem colSpan={1} h="full" textAlign="right" display={"flex"}>
            <Box
              alignSelf={"flex-end"}
              w={"full"}
              onClick={toggleColorMode}
              border={`1px solid ${useTheme().colors.stroke}`}
              p={5}
              justifyContent={"flex-end"}
              display={"flex"}
            >
              <Image
                // https://www.iconfinder.com/icons/9056971/dark_mode_icon
                src={"theme-icon.svg"}
                alt="Mode"
                height={30}
                filter={`invert(${iconColor})`}
              />
            </Box>
          </GridItem>
        </Grid>
        <BackgroundLines />
      </Box>
    </motion.div>
  );
};
export default NavPage;
