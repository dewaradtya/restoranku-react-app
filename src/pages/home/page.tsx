import React from "react";
import Hero from "../../components/home/hero";
import Favorite from "../../components/home/favorite";
import Artikel from "../../components/home/artikel";
import Event from "../../components/home/event";
import Reservation from "../../components/home/reservation";
import Testimonial from "../../components/home/testimonial";

function Home() {
  return (
    <div className="Home">
      <Hero />
      <Favorite />
      <Event />
      <Testimonial />
      <Reservation />
      <Artikel />
    </div>
  );
}

export default Home;
