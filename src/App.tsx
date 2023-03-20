import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function App(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <BrowserRouter>
        <Sidebar window={window} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        <CssBaseline />
        <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
        <Routes>
          <Route path='/home' element={<Content drawerWidth={drawerWidth}><div>home</div></Content>} />
          <Route path='/more' element={<Content drawerWidth={drawerWidth}><div>more</div></Content>} />
        </Routes>
      </BrowserRouter>
    </Box >
  );
}
