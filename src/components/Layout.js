import React from "react";
import { Box } from "gestalt";
import Menu from './Menu'

const Header = () => (
  <Box display="flex" alignContent="between">
    <Box display="flex" alignItems="center">
      <Menu />
      {/*<Logo />*/}
    </Box>
    <Box display="flex">
      {/*<Player />*/}
      {/*<VoiceList />*/}
      {/*<SpeedList />*/}
    </Box>
    {/*<More />*/}
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
