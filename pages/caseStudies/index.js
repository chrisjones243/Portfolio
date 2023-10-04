import { Flex, Heading, Text, Box, Button } from "@chakra-ui/react";
import client from "../../sanity/lib/client";
import groq from "groq";
import { useState, useEffect } from "react";
import CaseStudiesList from "../../components/caseStudiesList";

function Casetudies() {
  const [studies, setStudies] = useState([]);

  useEffect(() => {
    const fetchStudies = async () => {
      return await client.fetch(`*[_type == "caseStudy"]`);
    };

    fetchStudies().then((data) => setStudies(data));
  }, []);

  return (
    <Box>
      <Heading>Case Studies </Heading>
      <Box pt={"20"} />
      <CaseStudiesList studies={studies} />
    </Box>
  );
}

export default Casetudies;
