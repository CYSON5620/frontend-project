// ErrorBoundary.js
import React, { Component } from 'react';
import { Box, Heading } from '@chakra-ui/react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box textAlign="center" mt={10}>
          <Heading size="lg">Something went wrong!</Heading>
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
