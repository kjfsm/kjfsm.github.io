"use client";
import HomeIcon from "@mui/icons-material/Home";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import NextLink from "next/link";

import TemporaryDrawer from "./Drawer";

export default function Appbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        {TemporaryDrawer()}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          kjfsm.net
        </Typography>
        <Button color="inherit" component={NextLink} href="/">
          <HomeIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
