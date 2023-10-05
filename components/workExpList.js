import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { imageObjToUrl } from "./misc";
import Link from "next/link";

const WorkExpList = ({ experiences }) => {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      mt={10}
      gap={20}
      px={[0, 0, 10, 20]}
      paddingLeft={[0, 0, 5, 10]}
      paddingBottom={50}
    >
      {experiences.map((exp) => (
        <Flex
          key={exp._id}
          direction={["column", "column", "row", "row"]}
          align={"center"}
          gap={5}
        >
          <Link href={exp.link}>
            <Image
              src={imageObjToUrl(exp.image)}
              alt={exp.title}
              w={[250, 320, 250, 250]}
              h={250}
              objectFit={"cover"}
            />
          </Link>
          <Box width={["100%", "80%", "80%", "60%"]}>
            <Text
              variant={"subheading"}
              fontSize={["1.5rem", "1.8rem", "2rem", "2.5rem"]}
              align={["center", "centre", "left", "left"]}
            >
              {exp.company}
            </Text>
            <Text
              variant={"body"}
              fontSize={["1rem", "1.1rem", "1.2rem", "1.2rem"]}
              align={["center", "centre", "left", "left"]}
            >
              {exp.jobTitle}
            </Text>
            <Text
              variant={"body"}
              fontSize={["1rem", "1.1rem", "1.2rem", "1.2rem"]}
              align={["center", "centre", "left", "left"]}
            >
              {exp.dateText}
            </Text>
            <Box pt={5} />
            <Text
              variant={"body"}
              fontSize={["1rem", "1.1rem", "1.2rem", "1.2rem"]}
              align={["center", "centre", "left", "left"]}
            >
              {exp.description}
            </Text>
          </Box>{" "}
        </Flex>
      ))}
    </Flex>
  );
};

export default WorkExpList;
