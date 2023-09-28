import {
  Flex,
  Text,
  Image,
  AspectRatio,
  Box,
  useTheme,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const NavBar = ({ isDrawerOpen, toggleDrawer }) => {
  const { colorMode } = useColorMode(); // Get the current color mode

  const logo = colorMode === "light" ? "/logo-dark.svg" : "/logo-light.svg";

  const variants = {
    open: {
      width: "calc(25% + 0.5px)",
    },
    closed: {
      width: "100%",
    },
  };

  const logoVariants = {
    open: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
    },
  };

  return (
    <Box
      // position="absolute"
      position="fixed"
      top="10"
      left={0}
      px={20}
      zIndex={1002}
      width="full"
      id="navbar"
      textAlign={"-moz-right"}
    >
      <motion.div
        variants={variants}
        initial={isDrawerOpen ? "open" : "closed"}
        animate={isDrawerOpen ? "open" : "closed"}
        style={{
          display: "flex",
          flexDirection: "column", // Ensures width change affects only the width
          width: "100%", // Initial width
          overflow: "hidden", // Hide overflowing content during animation
          transition: "0.3s ease", // Animation timing and easing
          border: `1px solid ${useTheme().colors.stroke}`, // Use Chakra UI's theme color
        }}
      >
        <Flex
          justify="space-between"
          alignItems="center"
          p="5"
          bg={`background.${colorMode}`}
        >
          <AspectRatio ratio={422.28 / 435.38} maxW="40px" w="full">
            <motion.div
              variants={logoVariants}
              initial={isDrawerOpen ? "open" : "closed"}
              animate={isDrawerOpen ? "open" : "closed"}
              transition="0.3s cubic-bezier(0,1.03,.48,1)"
            >
              <Image
                src={logo}
                alt="Logo"
                w="100%"
                h="100%"
                objectFit="contain"
              />
            </motion.div>
          </AspectRatio>
          <Text
            onClick={toggleDrawer}
            variant="subheading"
            style={{
              whiteSpace: "pre-line",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: 1,
            }}
          >
            {isDrawerOpen ? "EX\nIT" : "ME\nNU"}
          </Text>
        </Flex>
      </motion.div>
    </Box>
  );
};

export default NavBar;
