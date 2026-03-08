"use client";

import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CarCard from "../component/CarCard";

interface Car {
  name: string;
  price: string;
  image: string;
}

export default function ServicesPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch("/api/cars");
        const data = await res.json();

        const formatted = data?.map((row: string[]) => ({
          name: row[0],
          price: row[1],
          image: row[2],
        }));

        setCars(formatted);
      } catch (err) {
        setError("Failed to load services");
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);
  return (
    <Container sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Our Travel Services
        </Typography>
      </motion.div>

      {loading && (
        <Box display="flex" justifyContent="center" mt={5}>
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Typography color="error" textAlign="center" mt={3}>
          {error}
        </Typography>
      )}
      {!loading && !error && (
        <Grid container spacing={3}>
          {cars.map((car, index) => (
            <Grid
              key={index}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
              }}
            >
              <CarCard {...car} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
