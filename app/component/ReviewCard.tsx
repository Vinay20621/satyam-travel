"use client";

import {
    Avatar,
    Box,
    Card,
    CardContent,
    Chip,
    Rating,
    Typography,
} from "@mui/material";
import { motion } from "framer-motion";

interface Props {
  name: string;
  rating: number;
  review: string;
  time: string;
}

export default function ReviewCard({
  name,
  rating,
  review,
  time,
}: Props) {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card
        sx={{
          borderRadius: 4,
          boxShadow: 3,
          height: "100%",
          bgcolor: "#ffffff",
        }}
      >
        <CardContent>
          {/* Header */}
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar sx={{ bgcolor: "#009688" }}>
              {name.charAt(0)}
            </Avatar>

            <Box flex={1}>
              <Typography fontWeight="bold">{name}</Typography>
              <Rating value={rating} readOnly size="small" />
              <Typography variant="caption" color="text.secondary">
                {time}
              </Typography>
            </Box>

            <Chip
              label="Verified"
              size="small"
              sx={{
                bgcolor: "#e0f2f1",
                color: "#009688",
                fontWeight: 500,
              }}
            />
          </Box>

          {/* Review Text */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 2 }}
          >
            {review}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}