import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    ThemeProvider,
    Toolbar,
    Typography
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";



import AboutUs from "./components/aboutUs";
import Achievements from "./components/achievements";
import ContactUs from "./components/contactUs";
import Hero from "./components/hero";
import Services from "./components/services";
import theme from "./theme";
import AppHeader from "./components/header";






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
    fontSize: '18px',
    background: 'linear-gradient(to bottom, #f5e7a1, #B59410)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
    marginTop: "0px",
}));


const LandingPage = () => {


    const [currentTab, setCurrentTab] = useState("HOME")

    const sectionRefs = {
        "HOME": useRef(null),
        "SERVICES": useRef(null),
        "ACHIEVEMENTS": useRef(null),
        "ABOUTUS": useRef(null),
        "CONTACTUS": useRef(null)
    }

    useEffect(() => {
        sectionRefs[currentTab].current?.scrollIntoView({ behavior: "smooth" });
    }, [currentTab])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ width: "100%" }}>
                {/* <AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.main }}>
                    <Toolbar>

                        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: "2px" }}>
                            <GradientTitle>BATTLE-K9</GradientTitle>
                            <Subtitle>DOG TRAINING ACADEMY</Subtitle>
                        </Box>
                        <Box sx={{display : "flex"}} >
                        <Button onClick={() => setCurrentTab("HOME")} sx={{ color: currentTab === "HOME" ? theme.palette.secondary.main : "white" }}>HOME</Button>
                        <Button onClick={() => setCurrentTab("SERVICES")} sx={{ color: currentTab === "SERVICES" ? theme.palette.secondary.main : "white" }}>SERVICES</Button>
                        <Button onClick={() => setCurrentTab("ACHIEVEMENTS")} sx={{ color: currentTab === "ACHIEVEMENTS" ? theme.palette.secondary.main : "white" }}>ACHIEVEMENTS</Button>
                        <Button onClick={() => setCurrentTab("ABOUTUS")} sx={{ color: currentTab === "ABOUTUS" ? theme.palette.secondary.main : "white" }}>ABOUT US</Button>
                        <Button onClick={() => setCurrentTab("CONTACTUS")} sx={{ color: currentTab === "CONTACTUS" ? theme.palette.secondary.main : "white" }}>CONTACT US</Button>
                        </Box>
                    </Toolbar>
                </AppBar> */}


                <AppHeader currentTab={currentTab} setCurrentTab={setCurrentTab} />

                <Hero ref={sectionRefs.HOME} />
                <AboutUs ref={sectionRefs.ABOUTUS} />

                <Services ref={sectionRefs.SERVICES} />
                <Achievements ref={sectionRefs.ACHIEVEMENTS} />
                <ContactUs ref={sectionRefs.CONTACTUS} />

            </Box>
        </ThemeProvider>
    );
};

export default LandingPage;
