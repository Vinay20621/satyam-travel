"use client";
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { motion } from "framer-motion";

export default function BookPage() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 5 }}>
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Book Your Ride
              </Typography>

              <Typography sx={{ mb: 2 }}>
                📍 457 Hari Om Nagar Colony, Samne Ghat, Varanasi (221005)
              </Typography>

              <Typography sx={{ mb: 1 }}>📞 +91-7905004227</Typography>

              <Typography sx={{ mb: 3 }}>
                ✉ info@varanasitaxibooking.in
              </Typography>

              {/* Google Map */}
              <Box
                sx={{
                  width: "100%",
                  height: 300,
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="https://www.google.com/maps?q=Varanasi&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </Box>
            </Paper>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                textAlign="center"
              >
                Booking Form
              </Typography>

              <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              >
                <TextField label="Full Name" fullWidth />
                <TextField label="Email" fullWidth />
                <TextField label="Mobile Number" fullWidth />
                <TextField label="Pickup Location" fullWidth />
                <TextField label="Drop Location" fullWidth />
                <TextField type="date" fullWidth />
                <TextField label="Message" multiline rows={4} fullWidth />

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#f57c00",
                    "&:hover": { backgroundColor: "#e65100" },
                  }}
                >
                  Submit Booking
                </Button>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}
