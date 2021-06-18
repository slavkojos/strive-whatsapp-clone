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
import { PasswordField } from "./PasswordField";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const LoginForm = (props: HTMLChakraProps<"form">) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };

    try {
      let response = await fetch("http://localhost:4000/whatsapp/users/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          //  Origin: "http://localhost:3000",
          "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
        // with axios:
        // withCredentials: {true}
      });
      if (response.ok) {
        alert("you are loggedIn");
        setTimeout(() => {
          history.push("/");
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
      onSubmit={(e) => {
        handleRegister(e);
      }}
      {...props}
    >
      <Stack spacing="6">
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
          Sign in
        </Button>
      </Stack>
    </chakra.form>
  );
};
