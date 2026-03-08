"use client";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Typography } from "@mui/material";

export default function Details() {
  return (
    <Box sx={{ backgroundColor: "#4b4948", color: "#fff", p: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <PhoneIcon sx={{ color: "#ffc107", mr: 1 }} fontSize="small" />
          <Typography variant="caption">+91-7318547602</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <WhatsAppIcon sx={{ color: "#ffc107", mr: 1 }} fontSize="small" />
          <Typography variant="caption">+91-7398324939</Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          <EmailIcon sx={{ color: "#ffc107", mr: 1 }} fontSize="small" />
          <Typography variant="caption">shivesh610@gmail.com</Typography>
        </Box>
      </Box>
    </Box>
  );
}
