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
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CarCard from "./component/CarCard";
import ReviewCard from "./component/ReviewCard";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cars, setCars] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
  const [questions, setQuestions] = useState<any[]>([]);

  const [carsLoading, setCarsLoading] = useState(true);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [questionsLoading, setQuestionsLoading] = useState(true);

  const [carsError, setCarsError] = useState("");
  const [reviewsError, setReviewsError] = useState("");
  const [questionsError, setQuestionsError] = useState("");

  const fetchCars = async () => {
    try {
      setCarsLoading(true);
      const res = await fetch("/api/cars");
      const data = await res.json();

      const formatted = data?.map((row: string[]) => ({
        name: row[0],
        price: row[1],
        image: row[2],
      }));

      setCars(formatted);
    } catch (error) {
      setCarsError("Failed to load cars");
    } finally {
      setCarsLoading(false);
    }
  };

  const fetchReviews = async () => {
    try {
      setReviewsLoading(true);
      const res = await fetch("/api/review");
      const data = await res.json();

      const formatted = data?.map((row: string[]) => ({
        name: row[0],
        rating: row[1],
        time: row[2],
        review: row[3],
      }));

      setReviews(formatted);
    } catch (error) {
      setReviewsError("Failed to load reviews");
    } finally {
      setReviewsLoading(false);
    }
  };

  const fetchQuestions = async () => {
    try {
      setQuestionsLoading(true);
      const res = await fetch("/api/question");
      const data = await res.json();

      const formatted = data?.map((row: string[]) => ({
        question: row[0],
        answer: row[1],
      }));

      setQuestions(formatted);
    } catch (error) {
      setQuestionsError("Failed to load questions");
    } finally {
      setQuestionsLoading(false);
    }
  };

  // ================= USE EFFECT =================
  useEffect(() => {
    fetchCars();
    fetchReviews();
    fetchQuestions();
  }, []);

  // ================= SCROLL FUNCTION =================
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
      {/* HERO SECTION */}
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

      {/* ================= CAR SECTION ================= */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Our Taxi Services
        </Typography>

        {carsLoading ? (
          <Box textAlign="center" py={5}>
            <CircularProgress />
          </Box>
        ) : carsError ? (
          <Typography color="error" textAlign="center">
            {carsError}
          </Typography>
        ) : (
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
                "&::-webkit-scrollbar": { display: "none" },
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
        )}
      </Container>

      {/* ================= REVIEW SECTION ================= */}
      <Box sx={{ bgcolor: "#e0f2f1", py: 10 }}>
        <Container>
          <Typography variant="h4" textAlign="center" gutterBottom>
            What Our Customers Say
          </Typography>

          {reviewsLoading ? (
            <Box textAlign="center" py={5}>
              <CircularProgress />
            </Box>
          ) : reviewsError ? (
            <Typography color="error" textAlign="center">
              {reviewsError}
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

      {/* ================= FAQ SECTION ================= */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Frequently Asked Questions
        </Typography>

        {questionsLoading ? (
          <Box textAlign="center" py={5}>
            <CircularProgress />
          </Box>
        ) : questionsError ? (
          <Typography color="error" textAlign="center">
            {questionsError}
          </Typography>
        ) : (
          questions.map((item, i) => (
            <Accordion key={i} sx={{ mt: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))
        )}
      </Container>
    </>
  );
}
