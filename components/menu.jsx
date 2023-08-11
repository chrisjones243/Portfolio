import { Flex, Text } from "@chakra-ui/react";

const Menu = () => {
  return (
    <Flex
      p={4}
      justify={"space-between"}
      borderColor={"stroke"}
      position={"fixed"}
      borderWidth={"1px"}
      bg={"background.secondary"}
      mt={"10"}
    >
      <Text fontSize={"subheading"}>MENU</Text>
    </Flex>
  );
};

export default Menu;
