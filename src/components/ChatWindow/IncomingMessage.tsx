import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
interface IncomingMessageProps {}

export const IncomingMessage: React.FC<IncomingMessageProps> = ({}) => {
  return (
    <Box backgroundColor="yellow.200" alignSelf="flex-start" justifySelf="flex-start" borderRadius="md" minHeight="10px" maxWidth="300px" my={3}>
      <Flex direction="column" align="flex-start" justify="space-between" p={2} color="black">
        <Text fontWeight="bold">John Doe</Text>
        <Text>Hi how are you what you doing now are you going to school</Text>
        <Text fontSize="xs" alignSelf="flex-end">
          12:02
        </Text>
      </Flex>
    </Box>
  );
};
