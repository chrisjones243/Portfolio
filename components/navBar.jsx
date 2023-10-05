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
import React from "react";
import Link from "next/link";

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
      position="fixed"
      top={["3", "5", "10"]}
      left={0}
      px={[5, 10, 20]}
      zIndex={1002}
      width="full"
      id="navbar"
      display="flex"
      justifyContent="flex-end"
    >
      <motion.div
        variants={variants}
        initial={isDrawerOpen ? "open" : "closed"}
        animate={isDrawerOpen ? "open" : "closed"}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflow: "hidden",
          transition: "0.3s ease",
          border: `1px solid ${useTheme().colors.stroke}`,
        }}
      >
        <Flex
          justify="space-between"
          alignItems="center"
          p={["3", "4", "5"]}
          bg={`background.${colorMode}`}
        >
          <Link
            href="/"
            style={{ cursor: "pointer", width: "40px", height: "100%" }}
          >
            <AspectRatio
              ratio={422.28 / 435.38}
              maxW={"40px"}
              w="full"
              h="full"
            >
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
          </Link>

          <Text
            onClick={toggleDrawer}
            variant="subheading"
            fontSize={["1rem", "2rem", "2.5rem"]}
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
