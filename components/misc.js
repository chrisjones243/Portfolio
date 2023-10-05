import { Text, Box, useTheme, Flex, useColorMode } from "@chakra-ui/react";
import ImageUrlBuilder from "@sanity/image-url";
import client from "../sanity/lib/client";

import Link from "next/link";

export const DescriptionText = ({ description }) => {
  return description.map((text, i) => {
    if (text.includes("{/b} ")) {
      return (
        <Text
          key={i}
          variant={"subheading"}
          fontSize={["1.5rem", "1.8rem", "2rem", "2.5rem"]}
        >
          <br /> {text.replace("{/b} ", "")} <br /> <br />
        </Text>
      );
    }
    return (
      <Text
        key={i}
        variant={"body"}
        fontSize={["1rem", "1.1rem", "1.2rem", "1.2rem"]}
      >
        {text} <br /> <br />
      </Text>
    );
  });
};

export const BasedAtText = ({ basedAt }) => {
  return basedAt.map((text, i) => {
    return (
      <Text
        key={i}
        variant={"body"}
        fontSize={["1rem", "1.1rem", "1.2rem", "1.2rem"]}
      >
        {text}
      </Text>
    );
  });
};

export const imageObjToUrl = (image) => {
  try {
    const builder = ImageUrlBuilder(client);
    const urlFor = (source) => builder.image(source);
    const imageUrl = urlFor(image).toString();
    return imageUrl;
  } catch (error) {
    console.log("object", image);
    console.log(error);
  }
};

export const ButtonMap = ({ data }) => {
  // Extract the useTheme hook outside of the callback function
  const theme = useTheme();

  const { colorMode } = useColorMode(); // Get the current color mode

  return (
    <Flex
      direction={"column"}
      justify={"center"}
      gap={[10, 10, 10, 20]}
      pt={10}
    >
      {data.map((button) => {
        return (
          <Link href={button.link} key={button._id}>
            <Box
              w={"full"}
              border={`1px solid ${theme.colors.stroke}`} // Use the extracted value inside the callback function
              p={5}
              display={"flex"}
              justifyContent={"center"}
              bg={`background.${colorMode}`}
            >
              <Text variant={"body"}> {button.text} </Text>
            </Box>
          </Link>
        );
      })}
    </Flex>
  );
};
