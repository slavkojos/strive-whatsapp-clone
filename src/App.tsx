import * as React from "react";
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme, Container } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { BrowserRouter as Router, Switch, Route, Link as RouterLink } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { ChatWindow } from "./pages/ChatWindow";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/" exact component={Home} />
      <Route path="/chat" exact component={ChatWindow} />
    </Router>
  </ChakraProvider>
);
