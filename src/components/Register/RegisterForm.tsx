import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
} from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { PasswordField } from "./PasswordField";

export const RegisterForm = (props: HTMLChakraProps<"form">) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      username,
      email,
      password,
    };

    try {
      let response = await fetch(
        "http://localhost:4000/whatsapp/users/register",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Register Succesful");
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      alert("something went wrong");
      console.log(error);
    }
  };

  return (
    <chakra.form
      onSubmit={(e: React.FormEvent) => {
        handleRegister(e);
      }}
      {...props}
    >
      <Stack spacing="6">
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input
            onChange={(e) => setUsername(e.currentTarget.value)}
            name="usernanme"
            type="username"
            required
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            onChange={(e) => setEmail(e.currentTarget.value)}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </FormControl>
        <PasswordField onChange={(e) => setPassword(e.currentTarget.value)} />
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Register for a free account
        </Button>
      </Stack>
    </chakra.form>
  );
};
