import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";

export default function OurFacilities() {
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/facilities/get-facilities`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TEMP_TOKEN}`,
            },
          }
        );
        const data = await response.json();
        if (data.success) {
          setFacilities(data.facilities);
          console.log(data.facilities);
        } else {
          setError("Failed to fetch facilities");
        }
      } catch (err) {
        setError("Error fetching facilities");
      } finally {
        setLoading(false);
      }
    };

    fetchFacilities();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <Container sx={{ py: 8 }}>
      <h1 className="text-3xl font-light tracking-wide text-center mb-8 uppercase">
        Our Facilities
      </h1>
      <div className="grid gap-4 mb-8 text-center">
        <h3 className="text-3xl font-semibold tracking-wide text-center uppercase">
          Bar & Restaurants
        </h3>
        <span className="text-xl font-thin tracking-widest text-center">We have multiple Bars And Restaurants</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-12">
        {facilities.map((facility, index) => (
          <div key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px",
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                image={facility.image}
                alt={facility.title}
                sx={{
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  height: 250,
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {facility.title}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "gray", mb: 1 }}>
                  {facility.subtitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {facility.description}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}
