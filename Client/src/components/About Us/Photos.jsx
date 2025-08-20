import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function CompactImageGallery() {
  const [cols, setCols] = React.useState(getCols());

  React.useEffect(() => {
    const handleResize = () => setCols(getCols());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getCols() {
    const w = window.innerWidth;
    if (w < 640) return 2; // mobile
    if (w < 1024) return 3; // tablet
    return 4; // desktop
  }

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        padding: 2,
      }}
    >
      <ImageList
        variant="masonry"
        cols={cols}
        gap={8}
        sx={{
          m: 0,
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?auto=format&fit=crop&w=600`}
              srcSet={`${item.img}?auto=format&fit=crop&w=600&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                display: "block",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  { img: "https://images.unsplash.com/photo-1549388604-817d15aa0110", title: "Bed" },
  { img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31", title: "Books" },
  { img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6", title: "Sink" },
  { img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3", title: "Kitchen" },
  { img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3", title: "Blinds" },
  { img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622", title: "Chairs" },
  { img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77", title: "Laptop" },
  { img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61", title: "Doors" },
  { img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7", title: "Coffee" },
  { img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee", title: "Storage" },
  { img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62", title: "Candle" },
  { img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4", title: "Coffee table" },
];
