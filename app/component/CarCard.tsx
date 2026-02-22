"use client";

import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  name: string;
  price: string;
  image: string;
}

export default function CarCard({ name, price, image }: Props) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: 4,
          width: "100%",
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: 8,
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            backgroundColor: "#f57c00",
            color: "#fff",
            textAlign: "center",
            py: 1,
            fontWeight: "bold",
          }}
        >
          {name}
        </Box>

        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h3" fontWeight="bold">
            ₹ {price}
            <Typography component="span" variant="body1">
              /Km
            </Typography>
          </Typography>

          <Box sx={{ position: "relative", width: "100%", height: 180, my: 2 }}>
            <Image
              src={image}
              alt={name}
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>

          <Typography variant="subtitle1" fontWeight="bold">
            Inside City
          </Typography>

          <Box sx={{ mt: 2, textAlign: "left", fontSize: 14 }}>
            <Typography>Airport Transfer – Rs. 1000</Typography>
            <Typography>8Hr/80km – Rs. 1800</Typography>
            <Typography>Full Day/200km – Rs. 2200</Typography>
            <Typography>Out Station – Rs. {price}/KM</Typography>
          </Box>

          <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
            Book Now
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
