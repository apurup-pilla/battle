import { createTheme } from "@mui/material"

const theme = createTheme({


    palette: {
        primary: {
            main: "#000000", // Black
        },
        secondary: {
            main: "#B59410", // Gold
            dark : "#6e670e"
        },
        
        background: {
            default: "#ffffff",
            second : '#ffe5b4'
        },
        text: {
            primary: "#000000",
            secondary: "#FFD700",
        },
        white: '#ffffff',
        common: {
            white: '#ffffff',
        },
    },
    typography: {

        // fontFamily : "Garamond Small Caps",
         fontFamily :'Georgia, serif' ,
 
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    // Avoids undefined appBar error
                    boxShadow: "none",
                },
            },
        },
    },
})


export default theme