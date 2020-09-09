import React from "react";
import { Box } from "gestalt";
import Menu from './Menu'
import Logo from './Logo'
import More from './More'
import SpeedList from './SpeedList'

const Header = () => (
  <Box paddingX={1} display="flex" alignContent="between">
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
/*
const Main = () => (
  <Box display="flex">
    <TextArea />
  </Box>
);
*/

const Layout = () => (
  <Box display="flex" direction="column">
    <Header />
    {/*<Main />*/}
  </Box>
);

export default Layout;
