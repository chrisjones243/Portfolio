import { Image, useColorMode } from "@chakra-ui/react";

import { imageObjToUrl } from "../components/misc";

const SocialMediaMap = ({ array }) => {
  const { colorMode } = useColorMode(); // Get the current color mode

  const iconColor = colorMode === "light" ? 0 : 1;
  return array.map((item, i) => {
    return (
      <Image
        key={i}
        src={imageObjToUrl(item.image.asset._ref)}
        alt={item.name}
        h={"40px"}
        w={"40px"}
        mr={"10px"}
        onClick={() => window.open(item.url, "_blank")}
        filter={`invert(${iconColor})`}
      />
    );
  });
};

export default SocialMediaMap;
