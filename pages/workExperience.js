import { Heading, Box } from "@chakra-ui/react";
import client from "../sanity/lib/client";
import { useState, useEffect } from "react";

import WorkExpList from "../components/workExpList";

function WorkExperience() {
  const [exp, setExp] = useState([]);

  useEffect(() => {
    const fetchStudies = async () => {
      return await client.fetch(`*[_type == "workExperience"]`);
    };
    fetchStudies().then((data) => setExp(data));
  }, []);

  return (
    <Box>
      <Heading fontSize={["4rem", "4rem", "5rem", "7rem"]}>
        Work Experience{" "}
      </Heading>
      <Box pt={[10, 20, 20]} />
      <WorkExpList experiences={exp} />
    </Box>
  );
}

export default WorkExperience;
