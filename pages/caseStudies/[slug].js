import { client } from "../../sanity/lib/client";
import groq from "groq";
import { Container, Text } from "@chakra-ui/react";

const CaseStudy = ({ study }) => {
  const { title, _id } = study;
  return (
    <Container minW="container.lg">
      <Text fontSize="5xl" fontWeight="black" pl="10px" mb={6}>
        {title}
      </Text>
    </Container>
  );
};

export default CaseStudy;

export async function getServerSideProps({ params }) {
  const study = await client.fetch(
    groq`*[_type == "caseStudy" && slug.current == $slug]`,
    { slug: params.slug }
  );

  console.log(study);

  return {
    props: { study: study[0] },
  };
}
