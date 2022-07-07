import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#199792",
            contrastText: "#fff",
        },
        secondary: {
            main: "#094D4A",
            contrastText: "#fff",
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
});

export default theme;