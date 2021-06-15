import { Button, chakra, FormControl, FormLabel, HTMLChakraProps, Input, Stack } from "@chakra-ui/react";
import * as React from "react";
import { PasswordField } from "./PasswordField";

export const RegisterForm = (props: HTMLChakraProps<"form">) => (
  <chakra.form
    onSubmit={(e) => {
      e.preventDefault();
      // your login logic here
    }}
    {...props}
  >
    <Stack spacing="6">
      <FormControl id="username">
        <FormLabel>Username</FormLabel>
        <Input name="usernanme" type="username" required />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input name="email" type="email" autoComplete="email" required />
      </FormControl>
      <PasswordField />
      <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
        Register for a free account
      </Button>
    </Stack>
  </chakra.form>
);
