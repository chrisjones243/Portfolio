import { Box, Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useTheme } from "@chakra-ui/react";

import Link from "next/link";

const Drawer = ({ isDrawerOpen, toggleDrawer }) => {
  const { colorMode } = useColorMode(); // Get the current color mode
  const [scrollPosition, setScrollPosition] = useState(0);

  // Save the current scroll position on component mount
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY || window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Restore the saved scroll position to freeze it
  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isDrawerOpen]);

  return (
    <Box
      bg={`background.${colorMode}`}
      minW="100vw"
      minH="100vh"
      position={"fixed"}
      top={0}
      left={0}
      display={isDrawerOpen ? "block" : "none"}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          display: "flex",
          flexDirection: "column", // Ensures width change affects only the width
          width: "100%", // Initial width
          overflow: "hidden", // Hide overflowing content during animation
          transition: "0.3s ease", // Animation timing and easing
          border: `1px solid ${useTheme().colors.stroke}`, // Use Chakra UI's theme color
        }}
      >
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/blog/hello-world">Blog Post</Link>
          </li>
        </ul>
      </motion.div>
    </Box>
  );
};
export default Drawer;
