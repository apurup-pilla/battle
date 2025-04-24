import { Button, Typography } from "@mui/material";
import theme from "./theme";

export const CallUsButton = () => (
    <a href="tel:+919705784328" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Button sx={{ backgroundColor: theme.palette.secondary.main, color : "white" ,

             animation: "pulseZoom 2.5s ease-in-out infinite",
                            '@keyframes pulseZoom': {
                                '0%': {
                                    transform: 'scale(1)',
                                },
                                '50%': {
                                    transform: 'scale(1.1)',
                                },
                                '100%': {
                                    transform: 'scale(1)',
                                },
                            },
         }}>
            CALL US
        </Button>
    </a>
)

export const SectionHeading = ({ title , sx }) => (
    <Typography variant="h4" gutterBottom align="center" style={{ fontWeight: 900, color : theme.palette.secondary.main , ...sx }}
    >
        {title}
    </Typography>
)