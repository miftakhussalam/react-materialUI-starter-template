import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";
import React from 'react'
const drawerWidth = 240;

interface Props {
  window?: () => Window;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

interface NavigationMenu {
  title: string;
  path: string;
}

const Sidebar = (props: Props) => {
  const { window, mobileOpen, handleDrawerToggle } = props;
  const container = window !== undefined ? () => window().document.body : undefined;

  const navigationMenu:  NavigationMenu[] = [
    {
      title: 'home',
      path: '/'
    },
    {
      title: 'Other',
      path: '/other'
    },
  ]

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {navigationMenu.map((menu, index) => (
          <Link key={menu.path} to={menu.path}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={menu.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
