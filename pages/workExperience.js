import { Flex, Heading, Text, Box, Button } from "@chakra-ui/react";
import { client } from "../sanity/lib/client";
import groq from "groq";
import { useState, useEffect } from "react";

import WorkExpList from "../components/workExpList";

function WorkExperience() {
  const [exp, setExp] = useState([]);

  useEffect(() => {
    const fetchStudies = async () => {
      return await client.fetch(`*[_type == "workExperience"]`);
    };
    fetchStudies()
      .then((data) => setExp(data))
      .then(() => console.log(exp));
  }, []);

  return (
    <Box>
      <Heading>Work Experience </Heading>
      <Box pt={"20"} />
      {/* {exp && exp.map((e) => <Text key={e._id}>{e.company}</Text>)} */}
      <WorkExpList experiences={exp} />
    </Box>
  );
}

export default WorkExperience;
