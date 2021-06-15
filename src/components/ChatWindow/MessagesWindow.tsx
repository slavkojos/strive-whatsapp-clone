import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { IncomingMessage } from "./IncomingMessage";
import { OutgoingMessage } from "./OutgoingMessage";
import "../../pages/styles.css";

interface MessagesWindowProps {}

export const MessagesWindow: React.FC<MessagesWindowProps> = ({}) => {
  return (
    <Box overflowY="auto" h={"100%"} py={20} className="scrollbar-hidden" backgroundColor="gray.900">
      <Flex direction="column" justify="flex-end" px={2}>
        <IncomingMessage />
        <OutgoingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <OutgoingMessage />
      </Flex>
    </Box>
  );
};
