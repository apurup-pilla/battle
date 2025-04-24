

import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    CardMedia,
    Typography,
    Paper,
    Avatar
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import { achievements, stats } from "../data";
import { SectionHeading } from "../resuable";
import theme from "../theme";
import { motion } from "framer-motion";



const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 2),
}));


// Background section styling
const Section2 = styled(Box)(({ theme }) => ({
    position: "relative",
    // padding: theme.spacing(10, 2),
    backgroundImage: 'url("/images/bg3.jpg")', // Change to your stats section image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
}));

// White overlay
const Overlay = styled(Box)(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.9)",
    zIndex: 1,
}));

// Content container on top of overlay
const Content = styled(Container)(() => ({
    position: "relative",
    zIndex: 2,
}));


const slideRightToLeft = {
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};


const StatCard = ({ number, label }) => {
    return (
        <Grid item xs={6} md={3}>
            <Box
                sx={{
                    p: 4,
                    borderRadius: 4,
                    textAlign: 'center',
                    // backgroundColor: '#fff',
                    // boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight={900}
                    sx={{ color: "#D4AF37", mb: 1 }}
                >
                    {number}
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{ color: '#333', fontWeight: 600 }}
                >
                    {label}
                </Typography>
            </Box>
        </Grid>
    );
};


const Achievements = ({ ref }) => {
    return (

        <>

            <Section ref={ref} sx={{ backgroundColor: '#f5f5f5' }}>
                <Container>

                    <SectionHeading title={"ACHIVEMENTS"} />



                    <Grid container spacing={4} justifyContent="center">
                        {achievements.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    sx={{

                                        position: 'relative',
                                        borderRadius: 4,
                                        overflow: 'visible',
                                        boxShadow: 5,
                                        marginBottom: 4
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={item.image}
                                        alt={item.title}
                                        sx={{
                                            width: '100%',
                                            height: 260,
                                            objectFit: 'cover',
                                            borderRadius: 4,
                                        }}
                                    />


                                    {/* <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: -40,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '90%',
                                            bgcolor: 'white',
                                            borderRadius: 2,
                                            padding: 2,
                                            boxShadow: 3,
                                            textAlign: 'center',
                                            background: `linear-gradient(to bottom, ${ theme.palette.background.second}, ${ "white"})`,
                                        }}
                                    >
                                        <Typography variant="subtitle1" fontWeight={700} sx={{color :  theme.palette.secondary.dark }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{color : "grey"}} >
                                            {item.description}
                                        </Typography>
                                    </Box>
 */}


                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.4 }}
                                        variants={slideRightToLeft}
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: -40,
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                width: '90%',
                                                bgcolor: 'white',
                                                borderRadius: 2,
                                                padding: 2,
                                                boxShadow: 3,
                                                textAlign: 'center',
                                                background: `linear-gradient(to bottom, ${theme.palette.background.second}, white)`,
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle1"
                                                fontWeight={700}
                                                sx={{ color: theme.palette.secondary.dark }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: 'grey' }}
                                            >
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </motion.div>


                                </Card>
                            </Grid>
                        ))}



                    </Grid>





                </Container>
            </Section>
            <Section2>
                <Overlay />
                <Content>
                    <Grid container spacing={4} justifyContent="center">
                        <StatCard number="20+" label="Awards Achieved" />
                        <StatCard number="5+" label="Years of Experience" />
                        <StatCard number="100+" label="Very Happy Customers" />
                        <StatCard number="200+" label="Dogs Trained" />
                    </Grid>
                </Content>
            </Section2>

        </>
    )
}






export default Achievements;