import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
interface IncomingMessageProps {}
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
export const IncomingMessage: React.FC<IncomingMessageProps> = ({ message }) => {
  return (
    <Box backgroundColor="yellow.200" alignSelf="flex-start" justifySelf="flex-start" borderRadius="md" minHeight="10px" maxWidth="300px" my={3}>
      <Flex direction="column" align="flex-start" justify="space-between" p={2} color="black">
        <Text fontWeight="bold">{message.senderId.username}</Text>
        <Text>{message.message}</Text>
        <Text fontSize="xs" alignSelf="flex-end">
          {displayTime(message.createdAt)}
        </Text>
      </Flex>
    </Box>
  );
};
