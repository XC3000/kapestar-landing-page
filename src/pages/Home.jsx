import React from "react";
import Contact from "../components/Contact/Contact";
import Experties from "../components/Experties/Experties";
import Hero from "../components/Hero/Hero";
import People from "../components/People/People";
import Work from "../components/Work/Work";
import Layout from "../Layout/Layout";
import Booking from "../components/Booking/Booking";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Experties />
      <Work />
      {/* <Portfolio/> */}
      <Booking />
      <People />
      <Contact />
    </Layout>
  );
};

export default Home;
