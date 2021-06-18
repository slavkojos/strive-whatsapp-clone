import React from "react";
import { useEffect, useState, useCallback } from "react";
import { Box, Flex, Container, Text, IconButton } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { Contact } from "../components/MainScreen/Contact";
import { Link as RouterLink } from "react-router-dom";
import "./styles.css";
import { ContactSearch } from "../components/MainScreen/ContactSearch";
import { io } from "socket.io-client";

// const socket = io("ws://localhost:8900");

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({ userID }) => {
  const [userData, setUserData] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const fetchData = useCallback(async () => {
    const response = await fetch(
      `http://localhost:4000/whatsapp/rooms/me/${userID}`
    );
    setUserData(await response.json());

    setisLoaded(true);
  }, []);
  useEffect(() => {
    // fetch user's rooms here
    // socket.on("connect", () => {
    //   console.log(`You connected with id ${socket.id}`);
    //   socket.emit("addUser", userID);
    // });
    fetchData();
  }, []);

  return (
    <Container maxW="container.sm" p={0} centerContent h={"100vh"}>
      <Flex
        align="stretch"
        justify="center"
        direction="column"
        backgroundColor="teal.900"
        w={"100%"}
      >
        <Flex justify="space-between" align="center" w={"100%"} px={3} mb={5}>
          <Text fontSize="xl">WhatsApp</Text>
          <Box>
            <IconButton
              variant="ghost"
              aria-label="search"
              icon={<GoSearch />}
              size="lg"
              isRound
            />
            <Menu placement="top-end">
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<BsThreeDotsVertical />}
                variant="ghost"
                isRound
              />
              <MenuList zIndex={3}>
                <MenuItem as={RouterLink} to="/edit-profile">
                  Edit profile
                </MenuItem>
                <MenuItem>Settings</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
        <Tabs isFitted isLazy={true} lazyBehavior="unmount">
          <TabList
            pos="sticky"
            top="0"
            left="0"
            right="0"
            backgroundColor="teal.900"
            zIndex={2}
          >
            <Tab>
              <Text casing="uppercase" fontWeight="bold">
                chats
              </Text>
            </Tab>
            <Tab>
              <Text casing="uppercase" fontWeight="bold">
                contacts
              </Text>
            </Tab>
          </TabList>
          <TabPanels backgroundColor="gray.800">
            <TabPanel px={0}>
              <Box overflowY="auto" className="scrollbar-hidden" h={"85vh"}>
                <Flex direction="column" justify="center">
                  {isLoaded === true &&
                    userData.userRooms.map((room, index) => {
                      const contact = room.users.find((user) => {
                        return user._id !== userID;
                      });

                      if (room.messages.length > 0) {
                        return (
                          <Contact
                            contact={contact}
                            key={index}
                            userID={userID}
                          />
                        );
                      }
                    })}
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <ContactSearch userID={userID} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Container>
  );
};
