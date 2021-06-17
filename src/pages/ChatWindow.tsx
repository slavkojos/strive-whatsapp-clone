import React from "react";
import { Flex, Box, Avatar, Text, Badge, Center, Circle, Container, IconButton, Input, Menu, MenuItem, MenuList, MenuButton } from "@chakra-ui/react";
import { IoMdArrowBack, IoMdCall } from "react-icons/io";
import { BsFillCameraVideoFill, BsThreeDotsVertical, BsMic } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { MdSend } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import { MessagesWindow } from "../components/ChatWindow/MessagesWindow";
import { useRef, useState, useEffect } from "react";

interface ChatWindowProps {}
interface MutableRefObject<T> {
  current: T;
}
function useRef<T>(initialValue: T): MutableRefObject<T>;

export const ChatWindow: React.FC<ChatWindowProps> = ({}) => {
  const sendMessage = () => {
    console.log(messageInput);
    setMessageInput("");
  };
  const [messageInput, setMessageInput] = useState<string>("");
  const messageInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    messageInputRef.current.focus();
  });

  return (
    <Container maxW="container.sm" p={0} centerContent>
      <Flex direction="column" justify="center" align="stretch" w={"100%"} h={"100vh"} pos="relative">
        <Flex justify="space-between" align="center" backgroundColor="teal.900" pos="absolute" top="0" left="0" right="0" zIndex={2}>
          <Flex align="center">
            <IconButton variant="ghost" aria-label="back" icon={<IoMdArrowBack />} size="lg" isRound as={RouterLink} to="/" />
            <Avatar name="Dan Abrahmov" size="sm" src="https://bit.ly/dan-abramov" />
            <Flex direction="column" ml={3}>
              <Text>John Doe</Text>
              <Text fontSize="xs">last seen today at 12:02</Text>
            </Flex>
          </Flex>
          <Flex justify="center">
            <IconButton variant="ghost" aria-label="video-call" icon={<BsFillCameraVideoFill />} size="lg" isRound />
            <IconButton variant="ghost" aria-label="back" icon={<IoMdCall />} size="lg" isRound />
            <Menu placement="top-end">
              <MenuButton as={IconButton} aria-label="Options" icon={<BsThreeDotsVertical />} variant="ghost" size="lg" isRound />
              <MenuList>
                <MenuItem>Delete chat</MenuItem>
                <MenuItem>Change background</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <MessagesWindow />
        <Flex pos="absolute" bottom="0" left="0" right="0" zIndex={2} justify="space-between" align="center" w={"100%"} backgroundColor="gray.800">
          <Flex justify="space-between" align="center" w={"100%"} mx={1}>
            <IconButton variant="ghost" aria-label="back" icon={<HiOutlineEmojiHappy />} size="lg" isRound />
            <Input
              size="md"
              variant="outline"
              placeholder="Type a message"
              w={"100%"}
              value={messageInput}
              ref={messageInputRef}
              onChange={(e) => {
                setMessageInput(e.currentTarget.value);
              }}
            />
          </Flex>
          {messageInput.length > 0 ? (
            <IconButton
              variant="solid"
              aria-label="back"
              icon={<MdSend />}
              size="md"
              isRound
              backgroundColor="teal.900"
              onClick={() => {
                sendMessage();
              }}
            />
          ) : (
            <IconButton variant="solid" aria-label="back" icon={<BsMic />} size="md" isRound backgroundColor="teal.900" />
          )}
        </Flex>
      </Flex>
    </Container>
  );
};
