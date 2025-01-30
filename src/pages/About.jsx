// import React from "react";
// import Layout from "../Components/Layout";
// import { Box, Typography } from "@mui/material";
// import "../styles/AboutStyles.css";

// const About = () => {
//   return (
//     <Layout>
//       <div className="about-main">
//         {/* Wrapper for Image and Text */}
//         <div className="about-img">
//           {/* Image */}
//           <img
//             src="https://theobroma.in/cdn/shop/files/aboutpage-header.jpg?v=1615444228"
//             alt="About Us"
//             width="100%"
//             style={{ display: "block" }}
//           />

//           {/* Overlay Text */}
//           <Typography
//             variant="h3"
//             sx={{
//               position: "absolute",
//               top: "20%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               color: "#bea064",
//               fontWeight: "bold",
//               fontFamily: ' "Signika Negative", serif',
//             }}
//           >
//             About Us
//           </Typography>
//         </div>

//         {/* Description Text */}
//         <div className="about-info">
//           <Typography
//             variant="body1"
//             sx={{ marginBottom: "16px", fontWeight: "500" }}
//           >
//             Theobroma means 'Food of the Gods' in Greek, befitting our exclusive
//             and indulgent range of offerings that include brownies, cakes,
//             desserts, chocolates, breads, and savouries.
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{ marginBottom: "16px", fontWeight: "500" }}
//           >
//             From our humble beginnings in 2004, when the first Theobroma pastry
//             store opened its doors at the iconic Cusrow Baug at Colaba Causeway
//             (Mumbai), we've grown to become a Pan-India chain of patisseries
//             with stores in over 30 cities.
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{ marginBottom: "16px", fontWeight: "500" }}
//           >
//             Our mission is to spread happiness by serving smiles on a plate, and
//             this journey continues as we open Theobroma patisseries across the
//             country.
//           </Typography>
//         </div>
//       </div>
//       <Box className="heading">Our Promise</Box>
//       <Box className="promise">
//         <Box sx={{ width: "20%", textAlign: "center" }}>
//           <img
//             src="https://theobroma.in/cdn/shop/files/icon1.jpg?v=1615448111"
//             alt=""
//           />

//           <Typography
//             sx={{
//               fontSize: "22px",
//               color: "#bea064",
//               fontFamily: ' "Signika Negative", serif',
//               fontWeight: "700",
//             }}
//           >
//             AUTHENTIC RECIPES
//           </Typography>
//           <p>
//             Our products are based on traditional home-style recipes, using
//             fresh ingredients.
//           </p>
//         </Box>
//         <Box sx={{ width: "20%", textAlign: "center" }}>
//           <img
//             src="https://theobroma.in/cdn/shop/files/icon2.jpg?v=1615448111"
//             alt=""
//           />

//           <Typography
//             sx={{
//               fontSize: "22px",
//               color: "#bea064",
//               fontFamily: ' "Signika Negative", serif',
//               fontWeight: "700",
//             }}
//           >
//             BAKED WITH LOVE
//           </Typography>
//           <p>
//             Our passion for baking is poured into every recipe, serving smiles
//             on a plate everyday.
//           </p>
//         </Box>
//         <Box sx={{ width: "20%", textAlign: "center" }}>
//           <img
//             src="https://theobroma.in/cdn/shop/files/icon3.jpg?v=1615448111"
//             alt=""
//           />

//           <Typography
//             sx={{
//               fontSize: "22px",
//               color: "#bea064",
//               fontFamily: ' "Signika Negative", serif',
//               fontWeight: "700",
//             }}
//           >
//             HONESTLY PRICED
//           </Typography>
//           <p>
//             We constantly strive to offer the best products at the right prices.
//           </p>
//         </Box>
//         <Box sx={{ width: "20%", textAlign: "center" }}>
//           <img
//             src="https://theobroma.in/cdn/shop/files/icon4.jpg?v=1615448111"
//             alt=""
//           />

//           <Typography
//             sx={{
//               fontSize: "22px",
//               color: "#bea064",
//               fontFamily: ' "Signika Negative", serif',
//               fontWeight: "700",
//             }}
//           >
//             COMMITTED TO QUALITY
//           </Typography>
//           <p>
//             From our ingredients to our kitchen operations & guest services, we
//             always prioritize quality.
//           </p>
//         </Box>
//       </Box>
//     </Layout>
//   );
// };

// export default About;


import React from "react";
import Layout from "../Components/Layout";
import { Box, Typography } from "@mui/material";
import "../styles/AboutStyles.css";

const About = () => {
  return (
    <Layout>
      <div className="about-main">
        {/* Wrapper for Image and Text */}
        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Image */}
          <img
            src="https://theobroma.in/cdn/shop/files/aboutpage-header.jpg?v=1615444228"
            alt="About Us"
            width="100%"
            style={{ display: "block" }}
          />

          {/* Overlay Text */}
          <Typography
            variant="h3"
            sx={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#bea064",
              fontWeight: "bold",
              fontFamily: '"Signika Negative", serif',
              fontSize: { xs: "24px", sm: "32px", md: "40px" },
              textAlign: "center",
            }}
          >
            About Us
          </Typography>
        </Box>

        {/* Description Text */}
        <Box
          sx={{
            padding: { xs: "16px", sm: "32px" },
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              marginBottom: "16px",
              fontWeight: "500",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
            }}
          >
            Theobroma means 'Food of the Gods' in Greek, befitting our exclusive
            and indulgent range of offerings that include brownies, cakes,
            desserts, chocolates, breads, and savouries.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "16px",
              fontWeight: "500",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
            }}
          >
            From our humble beginnings in 2004, when the first Theobroma pastry
            store opened its doors at the iconic Cusrow Baug at Colaba Causeway
            (Mumbai), we've grown to become a Pan-India chain of patisseries
            with stores in over 30 cities.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "16px",
              fontWeight: "500",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
            }}
          >
            Our mission is to spread happiness by serving smiles on a plate, and
            this journey continues as we open Theobroma patisseries across the
            country.
          </Typography>
        </Box>
      </div>

      {/* Our Promise Section */}
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          margin: "16px 0",
          fontSize: { xs: "20px", sm: "28px" },
          color: "#bea064",
          fontWeight: "700",
          fontFamily:'"Signika Negative", serif',
        }}
      >
        Our Promise
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          padding: { xs: "16px", sm: "32px" },
        }}
      >
        {[
          {
            img: "https://theobroma.in/cdn/shop/files/icon1.jpg?v=1615448111",
            title: "AUTHENTIC RECIPES",
            text: "Our products are based on traditional home-style recipes, using fresh ingredients.",
          },
          {
            img: "https://theobroma.in/cdn/shop/files/icon2.jpg?v=1615448111",
            title: "BAKED WITH LOVE",
            text: "Our passion for baking is poured into every recipe, serving smiles on a plate everyday.",
          },
          {
            img: "https://theobroma.in/cdn/shop/files/icon3.jpg?v=1615448111",
            title: "HONESTLY PRICED",
            text: "We constantly strive to offer the best products at the right prices.",
          },
          {
            img: "https://theobroma.in/cdn/shop/files/icon4.jpg?v=1615448111",
            title: "COMMITTED TO QUALITY",
            text: "From our ingredients to our kitchen operations & guest services, we always prioritize quality.",
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: "45%", md: "20%" },
              textAlign: "center",
              padding: "16px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              borderRadius: "8px",
            }}
          >
            <img src={item.img} alt={item.title} width="20%" />
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "16px", sm: "18px", md: "22px" },
                color: "#bea064",
                fontFamily: '"Signika Negative", serif',
                fontWeight: "700",
                marginTop: "8px",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                marginTop: "8px",
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default About;
