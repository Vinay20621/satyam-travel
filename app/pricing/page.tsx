"use client";

import {
  Box,
  Chip,
  CircularProgress,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PricingPage() {
  const [pricingData, setPricingData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPricing = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/pricing");
      const data = await res.json();

      const formatted = data?.map((row: any) => ({
        type: row[0],
        airport: row[1],
        hr8: row[2],
        hr12: row[3],
        out: row[4],
      }));

      setPricingData(formatted);
    } catch (err) {
      setError("Failed to load pricing data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPricing();
  }, []);

  return (
    <Box sx={{ bgcolor: "#f8f9fb", py: 10 }}>
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
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
            Baba Travels Taxi Services
          </Typography>
        </motion.div>

        {/* Pricing Table */}
        <Paper
          elevation={4}
          sx={{
            mt: 5,
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#ff9800" }}>
                {[
                  "Taxi Type",
                  "Airport Transfer",
                  "8 Hrs 80 Km",
                  "12 Hr Full Day",
                  "Out Station (Per Km)",
                ].map((head) => (
                  <TableCell
                    key={head}
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : error ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    <Typography color="error">{error}</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                pricingData.map((row, index) => (
                  <TableRow
                    key={index}
                    hover
                    sx={{
                      transition: "0.3s",
                      "&:hover": {
                        bgcolor: "#fff3e0",
                        transform: "scale(1.01)",
                      },
                    }}
                  >
                    <TableCell>
                      <Chip
                        label={row.type}
                        color="primary"
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell>₹ {row.airport}</TableCell>
                    <TableCell>₹ {row.hr8}</TableCell>
                    <TableCell>₹ {row.hr12}</TableCell>
                    <TableCell>₹ {row.out}/km</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </Paper>

        {/* Notice Section */}
        <Box
          sx={{
            mt: 8,
            p: 5,
            borderRadius: 4,
            bgcolor: "#fff3e0",
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#ff6f00"
            gutterBottom
          >
            Notice
          </Typography>

          <Box component="ul" sx={{ pl: 3, mt: 2 }}>
            <li>- Out Station Minimum Billing 250 Km Per Day</li>
            <li>
              - Driver night charge applicable before 6 am and after 9 pm or 12
              hours whichever is first
            </li>
            <li>
              - All Toll Tax, State/Border Tax, Parking Charges will be extra
            </li>
            <li>- GST will be extra on total billing amount</li>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
