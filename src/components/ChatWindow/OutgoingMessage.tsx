import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
interface OutgoingMessageProps {}
const displayTime = (time: string) => {
  let unix_timestamp = 1549312452;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  const date = new Date(unix_timestamp * 1000);
  // Hours part from the timestamp
  const hours = date.getHours();
  // Minutes part from the timestamp
  const minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  const seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  const formattedTime = hours + ":" + minutes.substr(-2);
  return formattedTime;
};

export const OutgoingMessage: React.FC<OutgoingMessageProps> = ({ message }) => {
  console.log("message", message);

  return (
    <Box backgroundColor="green.600" alignSelf="flex-END" justifySelf="flex-END" borderRadius="md" minHeight="10px" my={3} maxWidth="300px">
      <Flex direction="column" align="flex-start" justify="space-between" p={2}>
        <Text color="white" fontWeight="bold">
          {message.senderId.username}
        </Text>
        <Text color="white">{message.message}</Text>
        <Text fontSize="xs" alignSelf="flex-end">
          {displayTime(message.createdAt)}
        </Text>
      </Flex>
    </Box>
  );
};
