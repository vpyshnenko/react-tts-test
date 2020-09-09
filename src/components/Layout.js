import React from "react";
import { Box } from "gestalt";
import Menu from './Menu'
import Logo from './Logo'
import More from './More'
import SpeedList from './SpeedList'
import Editor from './Editor'
import Player from './Player'

import "./styles/style.css";
import 'gestalt/dist/gestalt.css';

const Header = () => (
  <Box padding={3} display="flex" justifyContent="between">
    <Box display="flex" alignItems="center">
      <Menu />
      <Logo />
    </Box>
    <Box display="flex">
      <Box marginRight={2}><Player /></Box>
      {/*<VoiceList />*/}
      <Box marginRight={2}><SpeedList /></Box>
      <Box marginRight={2}><SpeedList /></Box>
    
    </Box>
    <More />
  </Box>
);

const Main = () => (
  <Box padding={3} flex="grow" color="gray" >
    <Editor />
  </Box>
);


const Layout = () => (
  <Box display="flex" height="100%" direction="column">
    <Header />
    <Main />
  
  </Box>
);

export default Layout;
