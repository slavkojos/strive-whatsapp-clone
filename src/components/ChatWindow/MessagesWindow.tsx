import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { IncomingMessage } from "./IncomingMessage";
import { OutgoingMessage } from "./OutgoingMessage";
import "../../pages/styles.css";
import { useRef, useEffect } from "react";
import ScrollableFeed from "react-scrollable-feed";

interface MessagesWindowProps {}

export const MessagesWindow: React.FC<MessagesWindowProps> = ({}) => {
  return (
    <Box overflowY="auto" h={"100%"} py={20} className="scrollbar-hidden" backgroundColor="gray.900" as={ScrollableFeed} forceScroll={true}>
      <Flex direction="column" justify="flex-end" px={2}></Flex>
    </Box>
  );
};
