import React from "react";
import { Box } from "gestalt";
import Menu from './Menu'
import Logo from './Logo'
import More from './More'
import SpeedList from './SpeedList'
import Editor from './Editor'

const Header = () => (
  <Box padding={3} display="flex" justifyContent="between">
    <Box display="flex" alignItems="center">
      <Menu />
      <Logo />
    </Box>
    <Box display="flex">
      {/*<Player />*/}
      {/*<VoiceList />*/}
      <SpeedList />
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
