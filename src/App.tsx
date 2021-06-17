import * as React from "react";
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme, Container } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { BrowserRouter as Router, Switch, Route, Link as RouterLink } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { ChatWindow } from "./pages/ChatWindow";
import { EditProfile } from "./pages/EditProfile";
const userID = "60ca107f86f4a446d882ebde";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/" render={(props) => <Home {...props} userID={userID} />} />
      <Route path="/chat/:roomID" render={(props) => <ChatWindow {...props} userID={userID} />} />
      <Route path="/editprofile" exact component={EditProfile} />
    </Router>
  </ChakraProvider>
);
