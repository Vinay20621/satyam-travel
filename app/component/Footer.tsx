"use client";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#0d0000", color: "#fff", pt: 6 }}>
      <Container>
        <Grid container spacing={5}>
          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <FooterTitle title="Quick Links" />
            <FooterLink text="Home" href="/" />
            <FooterLink text="About Us" href="/about" />
            <FooterLink text="Travel Services" href="/travel-services" />
            <FooterLink text="Pricing" href="/pricing" />
            <FooterLink text="Book Now" href="/book-now" />

            <Box sx={{ mt: 2 }}>
              <IconButton sx={{ bgcolor: "#3b5998", mr: 1 }}>
                <FacebookIcon sx={{ color: "#fff" }} />
              </IconButton>
              <IconButton sx={{ bgcolor: "#333" }}>
                <InstagramIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Box>
          </Grid>

          {/* Popular Routes 1 */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <FooterTitle title="Popular Routes" />
            <FooterLink text="Varanasi To Maihar Devi (MP)" href="#" />
            <FooterLink text="Varanasi To Lakhaniya Dari Fall" href="#" />
            <FooterLink text="Varanasi To Rajdari (Fall)" href="#" />
            <FooterLink text="Varanasi To Devdari Fall" href="#" />
            <FooterLink text="Varanasi To Jaunpur" href="#" />
          </Grid>

          {/* Popular Routes 2 */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <FooterTitle title="Popular Routes" />
            <FooterLink text="Varanasi To Ayodhya" href="#" />
            <FooterLink text="Varanasi To Bhadohi" href="#" />
            <FooterLink text="Varanasi To Buxar" href="#" />
            <FooterLink text="Varanasi To Vindhyachal" href="#" />
            <FooterLink text="Varanasi To Nepal" href="#" />
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <FooterTitle title="Get In Touch" />

            <Box sx={{ display: "flex", mb: 2 }}>
              <LocationOnIcon sx={{ color: "#ffc107", mr: 1 }} />
              <Typography variant="body2">
                457 Hari Om Nagar Colony, Samne Ghat, Bhagwanpur, Varanasi UP -
                221005
              </Typography>
            </Box>

            <Box sx={{ display: "flex", mb: 1 }}>
              <PhoneIcon sx={{ color: "#ffc107", mr: 1 }} />
              <Typography variant="body2">+91-7318547602</Typography>
            </Box>

            <Box sx={{ display: "flex", mb: 1 }}>
              <PhoneIcon sx={{ color: "#ffc107", mr: 1 }} />
              <Typography variant="body2">+91-7398324939</Typography>
            </Box>

            <Box sx={{ display: "flex", mb: 1 }}>
              <EmailIcon sx={{ color: "#ffc107", mr: 1 }} />
              <Typography variant="body2">shivesh610@gmail.com</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Divider sx={{ my: 4, borderColor: "#333" }} />

        <Typography variant="body2" textAlign="center" sx={{ pb: 3 }}>
          © 2024 All Rights Reserved. Baba Travels –
          <Box component="span" sx={{ color: "#ffc107" }}>
            {" "}
            Best Cab Services in Varanasi{" "}
          </Box>
          | Website Designed and Powered by :
          <Box component="span" sx={{ color: "#ffc107" }}>
            {" "}
            Varanasi Best Web Design Company
          </Box>
        </Typography>
      </Container>
    </Box>
  );
}

/* Reusable Components */

function FooterTitle({ title }: { title: string }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" fontWeight="bold">
        {title}
      </Typography>
      <Box
        sx={{
          width: 50,
          height: 3,
          backgroundColor: "#ffc107",
          mt: 1,
        }}
      />
    </Box>
  );
}

function FooterLink({ text, href }: { text: string; href: string }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
      <ArrowRightIcon sx={{ color: "#ffc107", fontSize: 18 }} />
      <Link
        href={href}
        style={{
          textDecoration: "none",
          color: "#fff",
          fontSize: "14px",
        }}
      >
        {text}
      </Link>
    </Box>
  );
}
