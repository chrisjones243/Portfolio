import { client } from "../../sanity/lib/client";
import groq from "groq";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";

import { DescriptionText, imageObjToUrl } from "../../components/misc";

const CaseStudy = ({ study }) => {
  const { title, _id, alt, description } = study;
  const image = study.image.asset._ref;

  const imageUrl = imageObjToUrl(image);

  return (
    <Box>
      <Heading>{title}</Heading>
      <Box pt={"20"} />
      <Image src={imageUrl} alt={alt} h={"40vw"} w={"full"} />
      <Box pt={"20"} />
      <DescriptionText description={description} />
    </Box>
  );
};

export default CaseStudy;

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "caseStudy"]`);

  return {
    paths: paths.map((study) => ({
      params: { slug: study.slug.current },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const study = await client.fetch(
    groq`*[_type == "caseStudy" && slug.current == $slug]`,
    { slug: params.slug }
  );

  return {
    props: { study: study[0] },
  };
}
