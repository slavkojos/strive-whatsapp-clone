import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Container,
} from "@chakra-ui/react";
import * as React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Card } from "../components/Login/Card";
import { DividerWithText } from "../components/Login/DividerWithText";
import { Link } from "../components/Login/Link";
import { LoginForm } from "../components/Login/LoginForm";
import { Link as RouterLink,  } from "react-router-dom";

export const Login = () => {
  return (
    <Container maxW="container.md">
      <Box
        bg={useColorModeValue("gray.50", "inherit")}
        minH="100vh"
        py="12"
        px={{ base: "4", lg: "8" }}
      >
        <Box maxW="md" mx="auto">
          <Heading textAlign="center" size="xl" fontWeight="extrabold">
            Sign in
          </Heading>
          <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
            <Text as="span">Don&apos;t have an account?</Text>
            <Link as={RouterLink} to="/register">
              Register here
            </Link>
          </Text>
          <Card>
            <LoginForm />
            <DividerWithText mt="6">or continue with</DividerWithText>
            <SimpleGrid mt="6" columns={3} spacing="3">
              <Button color="currentColor" variant="outline">
                <VisuallyHidden>Login with Facebook</VisuallyHidden>
                <FaFacebook />
              </Button>
              <Button color="currentColor" variant="outline">
                <VisuallyHidden>Login with Google</VisuallyHidden>
                <FaGoogle />
              </Button>
              <Button color="currentColor" variant="outline">
                <VisuallyHidden>Login with Github</VisuallyHidden>
                <FaGithub />
              </Button>
            </SimpleGrid>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};
