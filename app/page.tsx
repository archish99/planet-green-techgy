"use client";
import Footer from "@/components/common/Footer";
import Amenities from "@/components/homepage/Amenities";
import GetInTouch from "@/components/homepage/GetInTouch";
import Header from "@/components/homepage/Header";
import Highlights from "@/components/homepage/Highlights";
import LocationHighlights from "@/components/homepage/LocationHighlights";
import LocationView from "@/components/homepage/LocationView";
import MoveIn from "@/components/homepage/MoveIn";
import Nature from "@/components/homepage/Nature";
import NoMailScreen from "@/components/homepage/NoMailScreen";
import OneNature from "@/components/homepage/OneNature";
import Project from "@/components/homepage/Project";
import Reels from "@/components/homepage/Reels";
import Testimonials from "@/components/homepage/Testimonials";
import { useState } from "react";

const HomePage = () => {
  const [detailsSubmitted, setDetailsSubmitted] = useState(false);

  return (
    <div className="min-h-screen">
      {!detailsSubmitted ? (
        <NoMailScreen mailsSubmitted={() => setDetailsSubmitted(true)} />
      ) : (
        <div>
          <Header />
          <Nature />
          <Highlights />
          <OneNature />
          <Project />
          <LocationHighlights />
          <Amenities />
          <LocationView />
          <GetInTouch />
          <Reels />
          <Testimonials />
          <MoveIn />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default HomePage;
