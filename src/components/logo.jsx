import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from '@chakra-ui/react'

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        <Link href = "/">ACM AI</Link>
      </Text>
    </Box>
  );
}