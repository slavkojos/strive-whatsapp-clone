import React from "react";
import {
  Box,
  Flex,
  Container,
  IconButton,
  Text,
  Avatar,
  AvatarBadge,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { IoMdArrowBack, IoMdCall, IoMdCheckmark } from "react-icons/io";
import { Link as RouterLink } from "react-router-dom";
import { AiFillCamera } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

interface EditProfileProps {}

export const EditProfile: React.FC<EditProfileProps> = ({}) => {
  const changeProfilePicture = async () => {
    // change profile picture
    console.log("changing profile picture");
  };
  return (
    <Container maxW="container.sm" p={0} centerContent h={"100vh"} w={"100%"}>
      <Flex direction="column" justify="space-between" align="center" w={"100%"} backgroundColor="teal.900">
        <Flex justify="flex-start" align="center" alignSelf="flex-start">
          <IconButton variant="ghost" aria-label="Search database" icon={<IoMdArrowBack />} isRound size="lg" as={RouterLink} to="/" />
          <Text fontSize="xl">Profile</Text>
        </Flex>
        <Box my={4}>
          <Avatar size="2xl" name="Segun Adebayo" src="https://bit.ly/sage-adebayo">
            <AvatarBadge as={IconButton} icon={<AiFillCamera />} isRound size="lg" bg="gray.900" onClick={changeProfilePicture} />
          </Avatar>
        </Box>
        <Flex justify="space-between" align="center" my={4}>
          <Flex direction="column" align="stretch" justify="space-between">
            <Text my={2} fontWeight="bold">
              Username
            </Text>
            <InputGroup w={"100%"}>
              <InputLeftElement children={<IconButton variant="ghost" aria-label="edit username" icon={<FaUserAlt />} isRound size="lg" />} />
              <Input placeholder="Enter username here" w={"100%"} />
              <InputRightElement children={<IconButton variant="ghost" aria-label="edit username" icon={<IoMdCheckmark />} isRound size="lg" />} />
            </InputGroup>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};
