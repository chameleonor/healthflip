import * as React from "react";
import { Outlet } from "react-router-dom";

import { Discount, Home, Settings } from "@mui/icons-material";

import { Stack, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";

import { AutoBreadcrumbs } from "../components/AutoBreadcrumbs";
import { ListItemLink } from "../components/ListItemLink";
import { Logo } from "../components/Logo";

const drawerWidth = 240;

export function DefaultLayout() {
  const theme = useTheme();

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

  const Menu = () => (
    <>
      <List
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRight: `1px solid ${theme.palette.divider}`,
        }}
      >
        <ListItemLink title="Home" to="/">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
        </ListItemLink>

        <ListItemLink title="Orcamentos" to="/budgets">
          <ListItemIcon>
            <Discount />
          </ListItemIcon>
        </ListItemLink>

        <ListItemLink title="Entidades" to="/entities">
          <ListItemIcon>
            <Discount />
          </ListItemIcon>
        </ListItemLink>

        <ListItemLink title="Test" to="/test">
          <ListItemIcon>
            <Discount />
          </ListItemIcon>
        </ListItemLink>

        {/* Para criar um menu aninhado */}

        {/* <ListItem key="Vendas" disablePadding sx={{ display: "block" }}>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Discount />
            </ListItemIcon>
            <ListItemText primary="Vendas" />
            {openSubMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemLink
                sx={{ pl: 4 }}
                title="Pedidos de Venda"
                to="/vendas/pedidos/"
              >
                <ListItemIcon>
                  <HorizontalRule />
                </ListItemIcon>
              </ListItemLink>
            </List>
          </Collapse>
        </ListItem> */}

        <Box
          sx={{
            display: "flex",
            position: "fixed",
            bottom: 0,
            borderTop: `1px solid ${theme.palette.divider}`,
            width: "100%",
          }}
        >
          <ListItemLink title="Configurações" to="/settings/">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
          </ListItemLink>
        </Box>
      </List>
    </>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
      <CssBaseline />
      <AppBar
        sx={{
          display: "flex",
          position: "fixed",
          width: "100%",
          backgroundColor: theme.palette.white,
          borderBottom: `1px solid ${theme.palette.gold[700]}`,
          boxShadow:
            "0px 2px 4px -1px rgb(196 161 35 / 20%), 0px 4px 5px 0px rgb(196 161 35 / 14%), 0px 1px 10px 0px rgb(196 161 35 / 12%)",
        }}
      >
        <Toolbar>
          <Logo />
        </Toolbar>
      </AppBar>

      {/* Left Menu */}
      <Stack
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "row",
          height: "100vh",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { sm: drawerWidth },
            height: "100%",
          }}
        >
          <Menu />
        </Box>
        <Box
          sx={{
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <AutoBreadcrumbs />
          <Outlet />
        </Box>
      </Stack>
    </Box>
  );
}
