// Repositories.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';

const Repositories = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/user/repos')
      .then(response => setRepos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Box p={4}>
      <Heading mb={4}>My Repositories</Heading>
      <Stack spacing={4}>
        {repos.map(repo => (
          <Box key={repo.id} borderWidth="1px" p={4} rounded="md">
            <Link to={`/repo/${repo.name}`}>
              <Heading size="md">{repo.name}</Heading>
            </Link>
            <Text>{repo.description}</Text>
          </Box>
        ))}
      </Stack>
      <Button as={Link} to="/create-repo" mt={4} colorScheme="blue">Create New Repo</Button>
    </Box>
  );
}

export default Repositories;
