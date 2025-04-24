

import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Typography
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

import {
    CardMedia,
} from '@mui/material';
import { otherServices, trainingServices } from "../data";
import { SectionHeading } from "../resuable";
import theme from "../theme";
import { motion } from "framer-motion";



const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 2),
    fontFamily: ["Cinzel", "serif"].join(","),
}));


const fadeInUpImage = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeInUpTitle = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 } }
};

const fadeInUpDesc = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 } }
};


const zoomInOut = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};



const Services = ({ ref }) => {
    return (
        <>
            <Section ref={ref} sx={{ width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
                <Container>
                    <SectionHeading title={"TRAINING SERVICES"} />
                    <Grid container spacing={2} sx={{ padding: 2, justifyContent: "center", width: "100%" }} >
                        {trainingServices.map((service, index) => (
                            // <Grid item key={index} >
                            //     <Box sx={{ position: "", width: 300, mx: "auto" }}>
                            //         <Card
                            //             sx={{
                            //                 pt: 3,
                            //                 pb: 4,
                            //                 px: 3,
                            //                 textAlign: "center",
                            //                 borderRadius: 4,
                            //                 boxShadow: "0px 8px 30px rgba(0,0,0,0.1)",
                            //                 backgroundColor: "#fff",
                            //                 marginBottom: "10px",
                            //                 backgroundColor:  theme.palette.background.second,
                            //             }}
                            //         >
                            //             <CardMedia
                            //                 component="img"
                            //                 image={service.imageSrc}
                            //                 alt={service.name}
                            //                 sx={{
                            //                     borderRadius: 4,
                            //                     height: "100%",
                            //                     width: "100%",
                            //                 }}
                            //             />
                            //             <Typography variant="h6" fontWeight={700} sx={{ mt: 3, color: '#6e670e', fontFamily: 'Georgia, serif', }}>
                            //                 {service.name}
                            //             </Typography>
                            //             <Typography variant="body2" color="text.secondary" sx={{
                            //                 mt: 1,
                            //                 color: "black"
                            //             }}>
                            //                 {service.description}
                            //             </Typography>
                            //         </Card>
                            //     </Box>
                            // </Grid>

                            <Grid item key={index}>
                                <Box sx={{ width: 300, mx: "auto" }}>
                                    <Card
                                        component={motion.div}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        variants={{}} // No animation on the card container itself
                                        sx={{
                                            pt: 3,
                                            pb: 4,
                                            px: 3,
                                            textAlign: "center",
                                            borderRadius: 4,
                                            boxShadow: "0px 8px 30px rgba(0,0,0,0.1)",
                                            backgroundColor: theme.palette.background.second,
                                            marginBottom: "10px",
                                        }}
                                    >
                                        {/* Image with fade-in-up animation */}
                                        <motion.div variants={fadeInUpImage}>
                                            <CardMedia
                                                component="img"
                                                image={service.imageSrc}
                                                alt={service.name}
                                                sx={{
                                                    borderRadius: 4,
                                                    height: "100%",
                                                    width: "100%",
                                                }}
                                            />
                                        </motion.div>

                                        {/* Title with delay */}
                                        <motion.div variants={fadeInUpTitle}>
                                            <Typography
                                                variant="h6"
                                                fontWeight={700}
                                                sx={{
                                                    mt: 3,
                                                    color: '#6e670e',
                                                    fontFamily: 'Georgia, serif',
                                                }}
                                            >
                                                {service.name}
                                            </Typography>
                                        </motion.div>

                                        {/* Description with further delay */}
                                        <motion.div variants={fadeInUpDesc}>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    mt: 1,
                                                    color: "black"
                                                }}
                                            >
                                                {service.description}
                                            </Typography>
                                        </motion.div>
                                    </Card>
                                </Box>
                            </Grid>

                        ))}
                    </Grid>
                </Container>
            </Section>
            <Section sx={{ backgroundColor: theme.palette.background.second, }}>
                <Container>
                    <SectionHeading title={"OTHER SERVICES"} sx={{ color: theme.palette.secondary.dark }} />
                    <Grid container spacing={2} sx={{ padding: 2, justifyContent: "center", width: "100%" }} >
                        {otherServices.map((service, index) => (
                            <Grid item key={index} >
                                <Box sx={{ position: "relative", width: 300, mx: "auto" }}>
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            width: 100,
                                            height: 100,
                                            borderRadius: "50%",
                                            overflow: "hidden",
                                            border: "4px solid white",
                                            boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
                                            zIndex: 2,
                                        }}
                                    >
                                        <Avatar
                                            src={service.imageSrc}
                                            alt="Profile"
                                            sx={{ width: "100%", height: "100%" }}
                                        />
                                    </Box>
                                    <Card
                                        sx={{
                                            pt: 4,
                                            pb: 4,
                                            px: 3,
                                            textAlign: "center",
                                            borderRadius: 4,
                                            boxShadow: "0px 8px 30px rgba(0,0,0,0.1)",
                                            backgroundColor: "#fff",
                                            marginTop: "60px",
                                            marginBottom: "10px",

                                        }}
                                    >
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.4 }}
                                            variants={zoomInOut}
                                        >
                                            <Typography
                                                variant="h6"
                                                fontWeight={700}
                                                sx={{ mt: 4, color: theme.palette.secondary.main }}
                                            >
                                                {service.name}
                                            </Typography>
                                        </motion.div>

                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.4 }}
                                            variants={zoomInOut}
                                        >
                                            <Typography
                                                variant="body2"
                                                sx={{ mt: 1, color: "grey" }}
                                            >
                                                {service.description}
                                            </Typography>
                                        </motion.div>

                                    </Card>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Section>
        </>
    );
};


export default Services;