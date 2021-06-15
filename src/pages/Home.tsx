import React from "react";
import { Box, Flex, Container, Text, IconButton } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Menu, MenuItem, MenuButton, MenuList } from "@chakra-ui/react";
import { Contact } from "../components/MainScreen/Contact";
import "./styles.css";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Container maxW="container.sm" p={0} centerContent h={"100vh"}>
      <Flex align="stretch" justify="center" direction="column" backgroundColor="teal.900" w={"100%"}>
        <Flex justify="space-between" align="center" w={"100%"} px={3} mb={5}>
          <Text fontSize="xl">WhatsApp</Text>
          <Box>
            <IconButton variant="ghost" aria-label="search" icon={<GoSearch />} size="lg" isRound />
            <Menu placement="top-end">
              <MenuButton as={IconButton} aria-label="Options" icon={<BsThreeDotsVertical />} variant="ghost" isRound />
              <MenuList zIndex={3}>
                <MenuItem>Edit profile</MenuItem>
                <MenuItem>Settings</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
        <Tabs isFitted>
          <TabList pos="sticky" top="0" left="0" right="0" backgroundColor="teal.900" zIndex={2}>
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
              <Box overflowY="auto" className="scrollbar-hidden">
                <Flex direction="column" justify="center">
                  <Contact />
                  <Contact />
                  <Contact />
                  <Contact />
                  <Contact />
                  <Contact />
                  <Contact />
                  <Contact />
                  <Contact />
                  <Contact />
                  <Contact />
                  <Contact />
                  <Contact />
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Container>
  );
};
