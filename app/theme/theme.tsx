import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#f57c00",
    },
    secondary: {
      main: "#212121",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
})

export default theme