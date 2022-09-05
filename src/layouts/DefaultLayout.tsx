import { Discount, ExpandLess, ExpandMore, Home, HorizontalRule, Settings } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Collapse, Divider, Stack, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { AutoBreadcrumbs } from '../components/AutoBreadcrumbs';
import { ListItemLink } from '../components/ListItemLink';

import { Logo } from '../components/Logo';
import { LayoutContent } from './LayoutContent.styles';

const drawerWidth = 240;

export function DefaultLayout() {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openSubMenu, setOpenSubMenu] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = () => {
    setOpenSubMenu(!openSubMenu);
  };

  // const breadcrumbs = [
  //   <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
  //     Vendas
  //   </Link>,
  //   <Link
  //     underline="hover"
  //     key="2"
  //     color="inherit"
  //     href="/material-ui/getting-started/installation/"
  //     onClick={handleClick}
  //   >
  //     Pedido de Venda
  //   </Link>,
  // ];

  const drawer = (
    <>
      <Box sx={{
        borderBottom: `1px solid ${theme.palette.gold[700]}`,
        boxShadow: '0px 2px 4px -1px rgb(196 161 35 / 20%), 0px 4px 5px 0px rgb(196 161 35 / 14%), 0px 1px 10px 0px rgb(196 161 35 / 12%)',
      }}>
        <Toolbar>
          <Logo />
        </Toolbar>
      </Box>
      <List sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <ListItemLink title='Home' to="/">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
        </ListItemLink>

        <ListItem key='Vendas' disablePadding sx={{ display: 'block' }}>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Discount />
            </ListItemIcon>
            <ListItemText primary='Vendas' />
            {openSubMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemLink sx={{ pl: 4 }} title="Pedidos de Venda" to="/vendas/pedidos/">
                <ListItemIcon>
                  <HorizontalRule />
                </ListItemIcon>
              </ListItemLink>
            </List>
          </Collapse>
        </ListItem>

        <Box sx={{ mt: 'auto' }}>
          <Divider />
          <ListItemLink title='Configurações' to="/configuracoes/">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
          </ListItemLink>
        </Box>
      </List>
    </>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: theme.palette.white,
          borderBottom: `1px solid ${theme.palette.gold[700]}`,
          boxShadow: '0px 2px 4px -1px rgb(196 161 35 / 20%), 0px 4px 5px 0px rgb(196 161 35 / 14%), 0px 1px 10px 0px rgb(196 161 35 / 12%)'
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              color: theme.palette.blue[500],
              mr: 2, display: { sm: 'none' }
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, height: '100vh' }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
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
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Toolbar />
          <Stack>
            {/* <Breadcrumbs
              separator={<NavigateNext fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs> */}
            <AutoBreadcrumbs />
          </Stack>

          <LayoutContent>
            <Outlet />
          </LayoutContent>
        </Box>
      </Box>
    </Box>
  );
}