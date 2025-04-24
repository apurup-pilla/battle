import {
    Box,
    Container,
    Typography
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { CallUsButton } from "../resuable";

import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut'
        }
    }
};

const stagger = {
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};


const Section = styled(Box)(({ theme }) => ({
    position: 'relative',
    padding: theme.spacing(10, 2),
    backgroundImage: 'url("/images/bg3.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#000',
    overflow: 'hidden',
}));

const Overlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // 90% white overlay
    zIndex: 1,
}));

const Content = styled(Container)(({ theme }) => ({
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
}));

const AboutUs = ({ ref }) => {
    return (
        <Section ref={ref}>
            <Overlay />
            <Content>


                {/* <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 900,
                        letterSpacing: '2px',
                        marginBottom: 3,
                        fontSize: { xs: '26px', md: '40px' },
                        color: '#111',
                        textShadow: '1px 1px 6px rgba(255, 255, 255, 0.4)',
                    }}
                >

                    Transforming Dog into a Lifelong Companion
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        maxWidth: '800px',
                        fontSize: { xs: '16px', md: '20px' },
                        lineHeight: 1.7,
                        color: '#333',
                        textShadow: '1px 1px 4px rgba(255, 255, 255, 0.3)',
                    }}
                >
                    With specialization in <strong>Obedience </strong> Training, <strong>Battle-K9 Dog Training Academy</strong> stands as a beacon of excellence. Our team is led by <strong>certified professionals from N.F.S.U Delhi</strong> and includes some of the <strong>topmost canine behavior specialists in India</strong>. We pride ourselves on offering <strong>expert-led</strong>, result-driven training programs that bring out the best in every dog — with <strong>discipline</strong>, <strong>dedication</strong>, and a <strong>deep understanding</strong> of canine behavior.

                </Typography>
                <Box sx={{ display: "flex", width: "100%", justifyContent: "end", marginTop: "30px" }}>
                    <CallUsButton />
                </Box> */}



                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                >
                    <motion.div variants={fadeInUp}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 900,
                                letterSpacing: '2px',
                                marginBottom: 3,
                                fontSize: { xs: '26px', md: '40px' },
                                color: '#111',
                                textShadow: '1px 1px 6px rgba(255, 255, 255, 0.4)',
                            }}
                        >
                            Transforming Dog into a Lifelong Companion
                        </Typography>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Typography
                            variant="h6"
                            sx={{
                                // maxWidth: '800px',
                                fontSize: { xs: '16px', md: '20px' },
                                lineHeight: 1.7,
                                color: '#333',
                                textShadow: '1px 1px 4px rgba(255, 255, 255, 0.3)',
                            }}
                        >
                            With specialization in <strong>Obedience </strong> Training, <strong>Battle-K9 Dog Training Academy</strong> stands as a beacon of excellence. Our team is led by <strong>certified professionals from N.F.S.U Delhi</strong> and includes some of the <strong>topmost canine behavior specialists in India</strong>. We pride ourselves on offering <strong>expert-led</strong>, result-driven training programs that bring out the best in every dog — with <strong>discipline</strong>, <strong>dedication</strong>, and a <strong>deep understanding</strong> of canine behavior.
                        </Typography>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Box sx={{ display: "flex", width: "100%", justifyContent: "end", marginTop: "30px" }}>
                            <CallUsButton />
                        </Box>
                    </motion.div>
                </motion.div>
            </Content>

        </Section>
    );
};

export default AboutUs;
