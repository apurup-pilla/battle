import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../theme';
import { styled } from "@mui/system";



const GradientTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Cinzel, serif',
  fontWeight: 700,
  fontSize: '32px',
  background: 'linear-gradient(to bottom, #f5e7a1, #B59410)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
  textAlign: 'center',
  marginBottom: "-9px",
  marginLeft: "20px"
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Cinzel, serif',
  fontWeight: 400,
  fontSize: "18px" , 
  background: 'linear-gradient(to bottom, #f5e7a1, #B59410)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
  textAlign: 'center',
  marginTop: "0px",
}));

const AppHeader = ({ currentTab, setCurrentTab }) => {

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const navItems = ["HOME", "ABOUTUS", "SERVICES", "ACHIEVEMENTS", "CONTACTUS"];

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar sx={{display: "flex" , justifyContent : "space-between" }} >

          <Box component="img" src='/images/logo.jpg' sx={{height : "50px" , marginTop : "10px" , marginBottom : "10px"}} />

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <Box sx={{ display: "flex" }}>
              {navItems.map(item => (
                <Button
                  key={item}
                  onClick={() => setCurrentTab(item)}
                  sx={{
                    color: currentTab === item ? theme.palette.secondary.main : "white"
                  }}
                >
                  {item.replace("US", " US")}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <List sx={{ width: 200 }}>
          {navItems.map(item => (
            <ListItem
              button
              key={item}
              sx={{
                color: currentTab === item ? theme.palette.secondary.main : "black"
              }}
              onClick={() => {
                setCurrentTab(item);
                setDrawerOpen(false); // close drawer on click
              }}
            >
              <ListItemText primary={item.replace("US", " US")} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default AppHeader;
