import React from "react";
import Banner from "../components/Banner";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
