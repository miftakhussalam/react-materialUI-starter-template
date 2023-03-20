import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

interface ContentProps {
  drawerWidth: number;
  children: React.ReactElement | null;
}

const Content = (props: ContentProps) => {
  const { drawerWidth, children } = props;
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
      <Toolbar />
      {children}
    </Box>
  )
}

export default Content;
