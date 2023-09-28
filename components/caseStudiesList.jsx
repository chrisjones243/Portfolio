import { Box, Heading } from "@chakra-ui/react";
import { imageObjToUrl } from "./misc";
import Link from "next/link";

const CaseStudiesList = ({ studies }) => {
  return (
    <Box direction={"column"} justify={"center"} align={"center"} mt={10}>
      {studies.map((study) => (
        <Link key={study._id} href={`/caseStudies/${study.slug.current}`}>
          <Box
            mt={10}
            position="relative"
            width="full"
            height="xs"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            backdropFilter="auto"
            overflow="hidden" // Hide overflowing content
          >
            <Box
              as="div"
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              backgroundImage={imageObjToUrl(study.image)}
              backgroundSize="cover"
              backgroundPosition="center"
              opacity="0.85" // Initial opacity
              transition="opacity 0.4s ease-in-out" // Add a smooth transition
              _hover={{
                opacity: "0.4", // Reduce opacity on hover
              }}
            ></Box>
            <Heading>{study.title}</Heading>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default CaseStudiesList;
