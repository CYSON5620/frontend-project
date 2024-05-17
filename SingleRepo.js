// SingleRepo.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Heading, Text } from '@chakra-ui/react';

const SingleRepo = () => {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    axios.get(`https://api.github.com/repos/your-username/${repoName}`)
      .then(response => setRepo(response.data))
      .catch(error => console.error(error));
  }, [repoName]);

  if (!repo) return <Box p={4}>Loading...</Box>;

  return (
    <Box p={4}>
      <Heading mb={4}>{repo.name}</Heading>
      <Text>{repo.description}</Text>
      {/* Add more details as needed */}
    </Box>
  );
}

export default SingleRepo;
