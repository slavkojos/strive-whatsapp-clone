import React from "react";
import { Flex, Box, Avatar, Text, Badge, Center, Circle, Input, Skeleton } from "@chakra-ui/react";
import { useEffect, useRef, useState, useCallback } from "react";
import { Contact } from "./Contact";

interface ContactSearchProps {}

export const ContactSearch: React.FC<ContactSearchProps> = ({ userID }) => {
  const [contacts, setContactsData] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const fetchContacts = useCallback(async () => {
    const response = await fetch(`http://localhost:4000/whatsapp/users`);
    const data = await response.json();
    setContactsData(data.users.filter((contact) => contact._id !== userID));
    setisLoaded(true);
  }, []);
  const searchContactsRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    searchContactsRef.current.focus();
    fetchContacts();
  }, []);
  console.log(contacts);

  return (
    <Flex direction="column" align="center" w={"100%"}>
      <Input placeholder="Search by username..." size="lg" ref={searchContactsRef} />
      <Flex direction="column" align="center" justify="center" w={"100%"}>
        {isLoaded === true &&
          contacts.map((contact: Object, index: number) => {
            return <Contact contact={contact} w={"100%"} key={index} userID={userID} />;
          })}
      </Flex>
    </Flex>
  );
};
