import React from "react";
import { Container, Card, CardContent, Typography, CardMedia } from "@mui/material";

const facilities = [
  {
    title: "Masala Zone",
    subtitle: "Savor Global Flavors",
    description:
      "Embark on a flavor-filled journey at Masala Zone, the ultimate MultiCuisine Restaurant that tantalizes taste buds with a diverse range of global flavors. Indulge in culinary adventures at our vibrant and lively establishment, where open kitchen concept meets vibrant decor. From exotic cocktails to Chef's Special Paneer Tikka and Avocado Toast, our menu is a true extravaganza. Discover the world on your plate, only at Masala Zone.",
    image: "https://www.silverarcadepremier.com/images/blog1.jpg",
  },
  {
    title: "NH-16",
    subtitle: "Savor Global Flavors",
    description:
      "Embark on a flavor-filled journey at NH-16, the ultimate MultiCuisine Restaurant that tantalizes taste buds with a diverse range of global flavors. Indulge in culinary adventures at our vibrant and lively establishment, where open kitchen concept meets vibrant decor. From exotic cocktails to Chef's Special Paneer Tikka and Avocado Toast, our menu is a true extravaganza. Discover the world on your plate, only at NH-16.",
    image: "https://www.silverarcadepremier.com/images/blog2.jpg",
  },
  {
    title: "Masala Zone",
    subtitle: "Savor Global Flavors",
    description:
      "Embark on a flavor-filled journey at Masala Zone, the ultimate MultiCuisine Restaurant that tantalizes taste buds with a diverse range of global flavors. Indulge in culinary adventures at our vibrant and lively establishment, where open kitchen concept meets vibrant decor. From exotic cocktails to Chef's Special Paneer Tikka and Avocado Toast, our menu is a true extravaganza. Discover the world on your plate, only at Masala Zone.",
    image: "https://www.silverarcadepremier.com/images/blog3.jpg",
  },
];

export default function OurFacilities() {
  return (
    <Container sx={{ py: 8 }}>
      <h1 className="text-4xl font-light tracking-wide text-center mb-8 uppercase">Our Facilities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-12">
        {facilities.map((facility, index) => (
          <div key={index}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: "20px", boxShadow: 3 }}>
              <CardMedia
                component="img"
                image={facility.image}
                alt={facility.title}
                sx={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px", height: 250, objectFit: "cover" }}
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

