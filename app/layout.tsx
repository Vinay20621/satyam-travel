import { Box } from "@mui/material";
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
          <Navbar />

          {/* Main Content */}
          <Box sx={{ flex: 1 }}>
            <Providers>{children}</Providers>
          </Box>

          <Footer />
        </Box>
      </body>
    </html>
  );
}