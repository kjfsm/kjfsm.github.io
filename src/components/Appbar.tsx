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
        <Typography
          variant="h6"
          component={NextLink}
          href="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          kjfsm.net
        </Typography>
        <Button color="inherit" component={NextLink} href="/">
          <HomeIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
