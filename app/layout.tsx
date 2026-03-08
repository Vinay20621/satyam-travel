import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Fab, Stack } from "@mui/material";
import Details from "./component/Details";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import "./globals.css";
import Providers from "./provider";

export const metadata = {
  title: "Taxi Travel Service",
  description: "Best Taxi Service in Your City",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Details />
          <Navbar />
          <Box sx={{ flex: 1 }}>
            <Providers>{children}</Providers>
          </Box>

          <Footer />
          <Stack
            spacing={2}
            sx={{
              position: "fixed",
              bottom: 20,
              right: 20,
              zIndex: 1000,
            }}
          >
            <Fab
              color="success"
              href="https://wa.me/917318547602"
              target="_blank"
            >
              <WhatsAppIcon fontSize="large" />
            </Fab>
            <Fab color="primary" href="tel:+917318547602">
              <CallIcon fontSize="large" />
            </Fab>
          </Stack>
        </Box>
      </body>
    </html>
  );
}
