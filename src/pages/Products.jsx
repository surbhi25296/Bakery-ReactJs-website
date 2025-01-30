

import React from "react";
import Layout from "../Components/Layout";
import { MenuList } from "../data/data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "../styles/Products.css";

const Menu = () => {
  return (
    <Layout>
      <Box
        className="product"
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: { xs: "300px", sm: "400px", md: "500px" }, // Responsive height
          backgroundImage: `url('https://theobroma.in/cdn/shop/files/Collection-desktop.jpg?v=1654084131')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay Box */}
        <Box
          sx={{
            padding: { xs: 2, sm: 4 },
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "24px", sm: "32px", md: "40px" },
              color: "#bea064",
              fontWeight: "bold",
              fontFamily: '"Signika Negative", serif',
            }}
          >
            SPRINKLEJOY PRODUCTS
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              color: "#333",
              marginTop: 2,
            }}
          >
            At SprinkleJoy, we offer a wide range of products, both sweet &
            savoury. Our offerings include indulgent brownies, cakes & desserts,
            artisanal breads, puffs & quiches, wholesome sandwiches, wraps &
            rolls, beverages, and more.
          </Typography>
        </Box>
      </Box>

      {/* Product Cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: { xs: 2, sm: 4 },
        }}
      >
        {MenuList.map((menu) => (
          <Card
            key={menu.id}
            sx={{
              maxWidth: { xs: "100%", sm: "350px"},
              margin: 2,
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{
                  height: { xs: "250px", sm: "350px" },
                  objectFit: "cover",
                }}
                component="img"
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  component="div"
                  sx={{
                    fontSize: { xs: "18px", sm: "20px" },
                    textAlign: "center",
                    fontFamily: '"Signika Negative", serif',
                    color: "#bea064",
                    fontSize: "22px",
                    fontWeight: "500",
                  }}
                >
                  {menu.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                    fontWeight: "bold",
                    textAlign:'center'
                  }}
                >
                  {menu.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
