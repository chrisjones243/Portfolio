import { Box, Heading, Flex } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

import Link from "next/link";

const NavPage = ({ animate }) => {
  const { colorMode } = useColorMode(); // Get the current color mode

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
        <Flex flexDirection="column" justify={"space-between"} h="full" py={20}>
          <Link href="/">
            <Heading>Home</Heading>
          </Link>

          <Link href="/about">
            <Heading>About</Heading>
          </Link>

          <Link href="/caseStudies">
            <Heading>Case Studies</Heading>
          </Link>
        </Flex>
      </Box>
    </motion.div>
  );
};
export default NavPage;
