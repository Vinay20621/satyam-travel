"use client";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import CarCard from "./component/CarCard";
import ReviewCard from "./component/ReviewCard";

const cars = [
  { name: "Swift Dzire", price: "11", image: "/cars/dzire.png" },
  { name: "Honda Amaze", price: "12", image: "/cars/amaze.png" },
  { name: "Toyota Etios", price: "12", image: "/cars/etios.png" },
  { name: "Maruti Ertiga", price: "13", image: "/cars/ertiga.png" },
];
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
const faqs = [
  {
    question: "How much does a taxi cost in Varanasi?",
    answer:
      "Taxi fares in Varanasi depend on the distance, vehicle type, and duration. Local rides usually start from affordable per-kilometer rates, while outstation trips are charged based on total distance and time.",
  },
  {
    question: "Which is the best taxi service in Varanasi?",
    answer:
      "The best taxi service offers clean vehicles, professional drivers, transparent pricing, and 24/7 availability. We focus on punctuality, safety, and customer satisfaction for every ride.",
  },
  {
    question: "Is Ola/Uber available in Varanasi?",
    answer:
      "Yes, Ola and Uber operate in Varanasi. However, availability may vary depending on location and peak hours. Our taxi service ensures confirmed bookings and reliable pickups.",
  },
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          height: "90vh",
          backgroundImage: "url('/header1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          px: 6,
        }}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" fontWeight="bold">
            VARANASI CAB
          </Typography>
          <Typography sx={{ mt: 2, maxWidth: 500 }}>
            Travel with comfort and safety. Best taxi service in Varanasi.
          </Typography>
          <Button variant="contained" sx={{ mt: 3, bgcolor: "#f57c00" }}>
            Get Started
          </Button>
        </motion.div>
      </Box>

      {/* CAR SLIDER SECTION */}
      <Container sx={{ py: 1, marginTop: "22px" }}>
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" textAlign="center" gutterBottom>
            Our Taxi Services
          </Typography>
        </motion.div>

        <Box sx={{ position: "relative", py: 4 }}>
          <IconButton
            onClick={() => scroll("left")}
            sx={{ position: "absolute", left: -20, top: "40%", zIndex: 2 }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: 3,
              overflowX: "auto",
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": { display: "none" },
              py: 2,
            }}
          >
            {cars.map((car, index) => (
              <Box key={index} sx={{ minWidth: 300 }}>
                <CarCard {...car} />
              </Box>
            ))}
          </Box>

          <IconButton
            onClick={() => scroll("right")}
            sx={{ position: "absolute", right: -20, top: "40%" }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Container>
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

          <Grid container spacing={4}>
            {reviews.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <ReviewCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container sx={{ py: 10 }}>
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" textAlign="center" gutterBottom>
            Frequently Asked Questions
          </Typography>
        </motion.div>

        {faqs.map((item, i) => (
          <Accordion key={i} sx={{ mt: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{fontWeight:'700'}}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
}
