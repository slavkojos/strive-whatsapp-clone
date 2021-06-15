import React from "react";
import { Flex, Box, Avatar, Text, Badge, Center, Circle } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <Box as={RouterLink} to="/chat" mb={8} px={2}>
      <Flex justify="space-between">
        <Flex>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Flex direction="column" align="flex-start" ml={4} justify="center">
            <Text>John Doe</Text>
            <Text isTruncated color="gray.500">
              Last chat message goes here
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" align="flex-end" justify="space-between">
          <Text>15/06</Text>
          <Circle bg="gray.600" size="20px">
            <Text color="gray.200">2</Text>
          </Circle>
        </Flex>
      </Flex>
    </Box>
  );
};
