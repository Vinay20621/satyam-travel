"use client";

import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReviewCard from "../component/ReviewCard";

export default function AboutPage() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔥 Fetch function outside useEffect
  const fetchReviews = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/review");
      const data = await res.json();

      const formatted = data?.map((row: string[]) => ({
        name: row[0],
        rating: row[1],
        time: row[2],
        review: row[3],
      }));

      setReviews(formatted);
    } catch (err) {
      setError("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <>
      {/* ABOUT SECTION */}
      <Container sx={{ py: 10 }}>
        {" "}
        <Grid container spacing={6} alignItems="center">
          {" "}
          <Grid size={{ xs: 12, md: 6 }}>
            {" "}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {" "}
              <Box sx={{ position: "relative", width: "100%", height: 400 }}>
                {" "}
                <Image
                  src="/taxi-image.png"
                  alt="Taxi Service"
                  fill
                  style={{ objectFit: "cover", borderRadius: 12 }}
                />{" "}
              </Box>{" "}
            </motion.div>{" "}
          </Grid>{" "}
          <Grid size={{ xs: 12, md: 6 }}>
            {" "}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {" "}
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {" "}
                About Satyam Travel{" "}
              </Typography>{" "}
              <Typography color="text.secondary" paragraph>
                {" "}
                We provide reliable and affordable taxi services for airport
                transfers, city rides, and outstation trips.{" "}
              </Typography>{" "}
              <Button variant="contained"> Book Your Ride </Button>{" "}
            </motion.div>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </Container>

      {/* 🔥 DYNAMIC REVIEW SECTION */}
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

            <Typography textAlign="center" color="text.secondary" mb={6}>
              Real experiences from travelers who explored with us
            </Typography>
          </motion.div>

          {/* ✅ Loader */}
          {loading ? (
            <Box textAlign="center" py={5}>
              <CircularProgress />
            </Box>
          ) : error ? (
            <Typography color="error" textAlign="center">
              {error}
            </Typography>
          ) : (
            <Grid container spacing={4}>
              {reviews.map((item, index) => (
                <Grid>
                  <ReviewCard {...item} />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
    </>
  );
}
