"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import ReviewCard from "../component/ReviewCard";

const reviews = [
  {
    name: "Sampath Kumar",
    rating: 5,
    time: "5 months ago",
    review:
      "Driver was very good and gave best service. Very professional and polite. Overall excellent service.",
  },
  {
    name: "Nairita Paul",
    rating: 5,
    time: "1 year ago",
    review:
      "Amazing experience with Satyam Travel. Very well coordinated and professional service.",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    time: "3 months ago",
    review:
      "Excellent service for solo travel. Felt safe and comfortable during the trip.",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    time: "3 months ago",
    review:
      "Excellent service for solo travel. Felt safe and comfortable during the trip.",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    time: "3 months ago",
    review:
      "Excellent service for solo travel. Felt safe and comfortable during the trip.",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    time: "3 months ago",
    review:
      "Excellent service for solo travel. Felt safe and comfortable during the trip.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ABOUT SECTION */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ position: "relative", width: "100%", height: 400 }}>
                <Image
                  src="/taxi-image.png"
                  alt="Taxi Service"
                  fill
                  style={{ objectFit: "cover", borderRadius: 12 }}
                />
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                About Satyam Travel
              </Typography>

              <Typography color="text.secondary" paragraph>
                We provide reliable and affordable taxi services for airport
                transfers, city rides, and outstation trips.
              </Typography>

              <Button variant="contained">
                Book Your Ride
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* REVIEW SECTION */}
      <Box sx={{ bgcolor: "#e0f2f1", py: 10 }}>
        <Container>
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              gutterBottom
            >
              What Our Customers Say
            </Typography>

            <Typography
              textAlign="center"
              color="text.secondary"
              mb={6}
            >
              Real experiences from travelers who explored with us
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {reviews.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <ReviewCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}