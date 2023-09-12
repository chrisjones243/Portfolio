import { Box, Heading, Flex } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

import { useTheme } from "@chakra-ui/react";

import Link from "next/link";

const NavPage = ({ isDrawerOpen }) => {
  const { colorMode } = useColorMode(); // Get the current color mode

  return (
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          transition: "0.3s ease", // Animation timing and easing
          border: `1px solid ${useTheme().colors.stroke}`, // Use Chakra UI's theme color
          width: "100%",
          height: "100%",
        }}
      >
        <Flex flexDirection="column" justify={"space-between"} h="full" py={20}>
          <Link href="/">
            <Heading>Home</Heading>
          </Link>

          <Link href="/about">
            <Heading>About</Heading>
          </Link>

          <Link href="/casestudies">
            <Heading>Case Studies</Heading>
          </Link>
        </Flex>
      </motion.div>
    </Box>
  );
};
export default NavPage;
