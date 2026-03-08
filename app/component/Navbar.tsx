"use client";

import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Travel Service", path: "/travel-services" },
  { label: "Pricing", path: "/pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left Side - Logo + Name */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Image
              src="/logo1.png"
              alt="Taxi Service"
              width={80}
              height={80}
              style={{ objectFit: "cover", borderRadius: 12 }}
            />
            <Typography variant="h6" fontWeight="bold">
              Satyam Travel
            </Typography>
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.path}
                  sx={{ color: "#fff" }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="secondary"
                LinkComponent={Link}
                href="/book-now"
              >
                Book Now
              </Button>
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250, height: "100%", background: "#1976d2" }}
          role="presentation"
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.path}
                  onClick={toggleDrawer}
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#607a94",
                    margin: "4px",
                    borderRadius: "8px",
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem disablePadding>
              <Button
                variant="contained"
                color="secondary"
                LinkComponent={Link}
                href="/book-now"
                style={{ marginLeft: "12px", marginTop: "8px" }}
              >
                Book Now
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
