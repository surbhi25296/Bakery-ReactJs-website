import React from "react";
import "../styles/HomeStyles.css";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="header-container">
          <p>
            Blissful Strawberry Cakes!
          </p>

          <h1>Choose From Our Delicious Desserts</h1>
          <Link to="/products">
            <button className="btn1">Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
// import Layout from "../Components/Layout";
// import { Link } from "react-router-dom";
// import HomeStyles from "../styles/HomeStyles.css"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import slider from "../styles/Slider.css"

// function SimpleSlider() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <Layout>
//       <div className="slider-container slider1">
//       <Slider {...settings}>
//         <div>
//           <img src="https://media.istockphoto.com/id/1189235789/photo/chocolate-mousse-desserts-concept.jpg?s=612x612&w=0&k=20&c=sbXqLr8TP0if1RGbu2ymZcNkZjpt_Ox50tQnddhJW6c=" alt="" width={'100%'} />
//         </div>
//         <div>
//           <img src="https://zedthebaker.com/cdn/shop/files/Slider-ZED-the-baker_1.png?v=1726843818&width=1860" alt="" width={'100%'} />
//         </div>
//         <div>
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlqV7oRe5FBUmKeVtRr8GkvWPQxFLyqLfAg&s" alt="" width={'100%'} />
//         </div>
//         <div>
//           <img src="https://cdn.pixabay.com/photo/2014/03/04/15/36/cupcake-279523_1280.jpg" alt="" width={'100%'}/>
//         </div>

//       </Slider>
//     </div>
//     </Layout>

//   );
// }

// export default SimpleSlider;
