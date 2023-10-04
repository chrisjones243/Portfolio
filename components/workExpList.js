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
      paddingLeft={10}
      paddingBottom={50}
    >
      {experiences.map((exp) => (
        <Flex key={exp._id} direction={"row"} align={"center"} gap={5}>
          <Link href={exp.link}>
            <Image
              src={imageObjToUrl(exp.image)}
              alt={exp.title}
              w={250}
              h={250}
              objectFit={"cover"}
            />
          </Link>
          <Box width={"60%"} align={"left"}>
            <Text variant={"subheading"}>{exp.company}</Text>
            <Text variant={"body"}>{exp.jobTitle}</Text>
            <Text variant={"body"}>{exp.dateText}</Text>
            <Box pt={5} />
            <Text variant={"body"}>{exp.description}</Text>
          </Box>{" "}
        </Flex>
      ))}
    </Flex>
  );
};

export default WorkExpList;
