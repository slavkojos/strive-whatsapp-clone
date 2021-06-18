import * as React from "react";
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme, Container } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { BrowserRouter as Router, Switch, Route, Link as RouterLink } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { ChatWindow } from "./pages/ChatWindow";
import { EditProfile } from "./pages/EditProfile";
import { io } from "socket.io-client";

const userID = "60ca107f86f4a446d882ebde";
const socket = io("ws://localhost:8900");
export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/" render={(props) => <Home {...props} userID={userID} socket={socket} />} />
      <Route path="/chat/:roomID" render={(props) => <ChatWindow {...props} userID={userID} socket={socket} />} />
      <Route path="/editprofile" exact component={EditProfile} />
    </Router>
  </ChakraProvider>
);
