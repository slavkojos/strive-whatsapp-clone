import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
interface OutgoingMessageProps {}

export const OutgoingMessage: React.FC<OutgoingMessageProps> = ({}) => {
  return (
    <Box backgroundColor="green.600" alignSelf="flex-END" justifySelf="flex-END" borderRadius="md" minHeight="10px" my={3} maxWidth="300px">
      <Flex direction="column" align="flex-start" justify="space-between" p={2}>
        <Text color="white" fontWeight="bold">
          John Doe
        </Text>
        <Text color="white">Hi how are you</Text>
        <Text fontSize="xs" alignSelf="flex-end">
          12:02
        </Text>
      </Flex>
    </Box>
  );
};
