import React from "react";
import { Flex, Box, Avatar, Text, Badge, Center, Circle, Divider } from "@chakra-ui/react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import "../../pages/styles.css";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({ contact, userID }) => {
  const history = useHistory();
  console.log("contact_id", contact._id);
  console.log("userID", userID);

  const fetchRoom = async () => {
    const data = {
      users: [userID, contact._id],
    };
    try {
      const response = await fetch("http://localhost:4000/whatsapp/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const chatRoomID = await response.json();

      history.push(`/chat/${chatRoomID.roomId}`);
    } catch (error) {}
  };
  console.log("contact prop:", contact["profilePic"]);

  return (
    <Box _hover={{ backgroundColor: "gray.700", borderRadius: "lg" }} p={3} mb={3} className="hover-fade" w={"100%"} onClick={fetchRoom}>
      <Flex justify="space-between">
        <Flex>
          <Avatar name="Dan Abrahmov" src={contact.profilePic} />
          <Flex direction="column" align="flex-start" ml={4} justify="center">
            <Text>{contact.username}</Text>
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
