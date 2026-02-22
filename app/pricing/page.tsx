"use client";

import {
    Box,
    Chip,
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

const pricingData = [
  { type: "Swift Dzire", airport: 1000, hr8: 1800, hr12: 2200, out: 11 },
  { type: "Honda Amaze", airport: 1000, hr8: 1800, hr12: 2400, out: 12 },
  { type: "Toyota Etios", airport: 1000, hr8: 1800, hr12: 2400, out: 12 },
  { type: "Maruti Ertiga", airport: 1200, hr8: 2000, hr12: 2600, out: 13 },
  { type: "Toyota Innova", airport: 1200, hr8: 2200, hr12: 3000, out: 15 },
  { type: "Innova Crysta", airport: 1400, hr8: 2600, hr12: 3400, out: 17 },
  { type: "Honda City", airport: 1500, hr8: 3000, hr12: 3500, out: 20 },
  { type: "Traveler (16s)", airport: 2500, hr8: 4000, hr12: 5000, out: 25 },
];

export default function PricingPage() {
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
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
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
                {pricingData.map((row, index) => (
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
                ))}
              </TableBody>
            </Table>
          </Paper>
        </motion.div>

        {/* Notice Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      </Container>
    </Box>
  );
}